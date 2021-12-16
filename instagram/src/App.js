import { instance } from "./apis";
import Router from "./Router";
import UserContext from "./context/user";
import { useState } from "react";

function App() {
  const { token } = localStorage;
  if (token) {
    instance.defaults.headers.common["Authorization"] = token;
  }

  const [isLogin, setIsLogin] = useState(!!localStorage.token);
  const value = {
    isLogin,
    setIsLogin: (val) => setIsLogin(val),
  };

  //콘텍스트: 외부 전역변수 처럼 쓸수있게
  return (
    <UserContext.Provider value={value}>
      <Router></Router>
    </UserContext.Provider>
  );
}

export default App;
