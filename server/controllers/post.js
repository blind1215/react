import connection from "../db/index.js";
import { verifyToken } from "../helper/user.js";

export const getPostMain = async (req, res) => {
  const token = req.headers.authorization;
  const jwtResult = verifyToken(token);
  if (!jwtResult) {
    return res.send({ success: false });
  }
  const userId = jwtResult.userId;

  const query = `
        select post.* ,user.user_name,user.profile_image,
        group_concat(image.url) as imageList
        from post join image on image.post_id = post.id
        join user on user.id = post.user_id 
        where post.user_id = ${userId}
        group by post.id order by post.created_at desc;
    `;

  const [rows] = await connection.query(query);
  console.log(rows);
  const postList = rows.map((post) => {
    const imageList = post.imageList.split(",");
    return { ...post, imageList };
  });
  res.send({ success: true, postList });
};

export const postPost = async (req, res) => {
  //1. 누가 올린 포스트인지 확인 token으로
  //2. content와 userId로 포스트 생성
  //3. 2에서 생성한 post_id를 담아서 urlList에온 이미지들을 생성

  const token = req.headers.authorization;
  const jwtResult = verifyToken(token);
  if (!jwtResult) {
    return res.send({ success: false });
  }
  const userId = jwtResult.userId;

  const { content, imageList } = req.body;
  const query1 = `
    insert into post(user_id, content) values(${userId}, '${content}');
  `;
  const [newPost] = await connection.query(query1);

  const postId = newPost.insertId;
  const promiseList = imageList.map((url) => {
    const query2 = `
      insert into image(post_id, url) values(${postId}, '${url}');
    `;
    return connection.query(query2);
  });

  await Promise.all(promiseList);
  return res.send({ success: true });
};
