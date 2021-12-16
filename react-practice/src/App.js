import React, { useState } from "react";
import MyComponent from "./components/MyComponent";
import Counter from "./components/Counter";
import Say from "./components/Say";
import EventPractice from "./components/EventPractice";
import IterationSample from "./components/IterationSample";
import VendingMachine from "./components/VendingMachine";
import Counter2 from "./components/Counter2";
import Info from "./components/Info";
import Counter3 from "./components/Counter3";
import Average from "./components/Average";
import styles from "./App.module.scss";
import StyledComponent from "./components/StyledComponent";
import Todo from "./components/Todo";
import Axios from "./components/Axios";
import News from "./components/news/News";
import Bootstrap from "./components/bootstrap/Bootstrap";

const App = () => {
  // function printMe() {
  //   console.log("hello world");
  // }
  // setTimeout(printMe, 1000);
  // console.log("대기중");

  const name = "react";
  const name2 = "react2";
  const [visible, setVisible] = useState(true);
  return (
    <>
      {/* <div className={styles["react-2"]}>
        <div className={`${styles.box} ${styles.orange}`}></div>
        <div className={`${styles.box} ${styles.red}`}></div>
        <div className={`${styles.box} ${styles.blue}`}></div>
      </div> */}

      <button onClick={() => setVisible(!visible)}>
        {!visible ? "보이기" : "숨기기"}
      </button>
      {visible && (
        <div>
          <Bootstrap></Bootstrap>
          <News />
          <Axios></Axios>
          <Todo></Todo>
          <StyledComponent></StyledComponent>
          <Average></Average>
          <Counter3></Counter3>
          <Info></Info>
          <Counter2></Counter2>
          <VendingMachine></VendingMachine>
          <IterationSample></IterationSample>
          <EventPractice></EventPractice>
          <Say></Say>
          <Counter></Counter>
          <MyComponent name={name} name2={name2}>
            <h2>헤헤헤칠드런이야</h2>
          </MyComponent>
          <MyComponent />
          <MyComponent name="vue" name2="angular" />
          <MyComponent />
        </div>
      )}
    </>
  );
};

export default App;
