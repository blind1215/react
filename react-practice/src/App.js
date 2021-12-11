import React from "react";
import MyComponent from "./components/MyComponent";
import Counter from "./components/Counter";
import Say from "./components/Say";
import EventPractice from "./components/EventPractice";
import IterationSample from "./components/IterationSample";

const App = () => {
  const name = "react";
  const name2 = "react2";
  return (
    <div style={{ margin: 20 }}>
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
  );
};

export default App;
