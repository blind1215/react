import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import UserContext from "../../context/user";

const LoginCheck = () => {
  const { isLogin } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      alert("로그인을 해주세요");
      navigate("/login");
    }
  }, [isLogin]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default LoginCheck;
