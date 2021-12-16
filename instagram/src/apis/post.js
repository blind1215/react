import { instance } from ".";

export const getPostListMain = async () => {
  const result = await instance.get("/post/main");
  return result.data;
};
