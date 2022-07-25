import React, { useCallback, useRef, useState } from "react";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function TodoHome() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트 기초를 배워보자",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링을 해보자",
      checked: true,
    },
    {
      id: 3,
      text: "To do List를 만들어 보자",
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </div>
  );
}

export default TodoHome;
