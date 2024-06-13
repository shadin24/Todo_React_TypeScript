import { on } from "events";
import NewTodo from "./components/NewTodo";
import Todo from "./components/Todo";
import Todos from "./models/Todos";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<Todos[]>([]);
  const onAddTodoHandler = (todoText: string) => {
    const newText = new Todos(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newText);
    });
  };

  return (
    <>
      <NewTodo onAddTodo={onAddTodoHandler} />
      <Todo item={todos} />
    </>
  );
}

export default App;
