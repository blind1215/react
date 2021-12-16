import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Todo = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, text: "할일", isDone: false },
    { id: 2, text: "할일", isDone: false },
  ]);

  const [memo, setMemo] = useState("");
  const [length, setLength] = useState(2);

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);
  const changeH = (e) => {
    setMemo(e.target.value);
    setLength(length + 1);
  };
  const clickH = () => {
    const newTodoList = [
      ...todoList,
      { id: length, text: memo, isDone: false },
    ];
    setTodoList(newTodoList);
    setMemo("");
  };
  const deleteH = (num) => {
    const deleteList = todoList.filter(({ id }) => id !== num);
    setTodoList(deleteList);
  };

  const checkH = (e, v) => {
    const { checked } = e.target;
    const newTodoList = todoList.map((todo) => {
      if (todo.id === v) {
        todo.isDone = checked;
      }
      return todo;
    });
    setTodoList(newTodoList);
  };
  return (
    <div>
      <hr />
      <Component>
        <Title>일정관리</Title>
        <InputWrapper>
          <Input onChange={changeH} value={memo} />
          <BtnAdd onClick={clickH}>등록</BtnAdd>
        </InputWrapper>
        <TodoList>
          {todoList.map(({ id, text, isDone }) => (
            <TodoItem key={id} isDone={isDone}>
              <label>
                <input type="checkbox" onChange={(e) => checkH(e, id)} />
                <TodoContent>{text}</TodoContent>
              </label>
              <BtnDelete onClick={() => deleteH(id)}>삭제</BtnDelete>
            </TodoItem>
          ))}
        </TodoList>
      </Component>
    </div>
  );
};

const Component = styled.div`
  width: 500px;
  margin: 10px auto;
  background: #fecdcd;
`;
const Title = styled.div`
  padding: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 25px;
`;
const InputWrapper = styled.div`
  display: flex;
  padding: 10px;
`;
const Input = styled.input`
  flex: 1;
  border: none;
  padding: 15px;
  border-radius: 4px;
`;
const Button = styled.button`
  margin-left: 10px;
  border: 1px solid #d1d3d8;
  background: #fff;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
`;

const BtnAdd = styled(Button)`
  background: #fff;
`;
const TodoList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  padding: 10px;
  label {
    display: flex;
    align-items: center;
  }
`;
const TodoContent = styled.span`
  margin-left: 10px;
`;
const TodoItem = styled.li`
  background: ${(props) => (props.isDone ? "black" : "white")};
  color: ${(props) => (props.isDone ? "white" : "black")};
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
  & + & {
    margin-top: 10px;
  }

  ${TodoContent} {
    text-decoration: ${(props) => props.isDone && "line-through"};
  }
`;

const BtnDelete = styled(Button)`
  background: red;
  color: #fff;
`;

export default Todo;
