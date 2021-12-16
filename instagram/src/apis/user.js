import { instance } from "./index";

export const signUp = async (data) => {
  const result = await instance.post("/user", data);
  return result.data;
};

export const logIn = async (data) => {
  const result = await instance.post("/user/token", data);
  return result.data;
};
