import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = 0;
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 48,
    fontWeight: "bold",
    padding: 16,
  };

  const classList = ["react", "react2"].join(" ");
  return (
    <>
      <input />
      <br />
      <br />
      <div style={style}>{name}</div>
      <div className={classList}>{name}</div>
      {name === "리액트" ? <h1>리액트입니다.</h1> : <h2>리액트가 아닙니다.</h2>}
      {name === "리액트" && <h1>리액트 입니다.</h1>}
      {name || "리액트123"}

      <h1>{name} 안녕</h1>
      <h2> 잘 작동하니?</h2>
    </>
  );
}

export default App;
