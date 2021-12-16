import connection from "../db/index.js";

export const getPostMain = async (req, res) => {
  const query = `
        select post.* ,user.user_name,user.profile_image,
        group_concat(image.url) as imageList
        from post join image on image.post_id = post.id
        join user on user.id = post.user_id
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
