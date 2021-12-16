import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../../apis";
import UserContext from "../../context/user";

const Logout = () => {
  //1. localStroage의 token 지우기
  //2. axios instance 의 default header Authorization 지우기
  //3. UserContext의 isLogin false로 만들기
  //로그인은 반대로 하기

  const { setIsLogin } = useContext(UserContext);

  useEffect(() => {
    localStorage.removeItem("token");
    delete instance.defaults.headers.common["Authorization"];
    setIsLogin(false);
  }, []);

  return <div>logout</div>;
};

export default Logout;
