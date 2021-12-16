import { useEffect, useState } from "react";
import { PostList } from "../organisms";
import { getPostListMain } from "../../apis/post";

const Main = () => {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    (async () => {
      const { postList } = await getPostListMain();
      setPostList(postList);
    })();
  }, []);

  return (
    <div>
      <PostList data={postList} />
    </div>
  );
};

export default Main;
