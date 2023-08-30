import { useState } from "react";
import "./App.css";
import { TodoAddForm } from "./components/TodoAddForm";
import { TodoList } from "./components/TodoList";

const DUMMY_TASKS = [
  { key: 0, task: "Cry under the bed" },
  { key: 1, task: "Eat pizza and ice cream" },
  { key: 2, task: "Learn React" },
];

function App() {
  const [list, setList] = useState(DUMMY_TASKS);
  const deleteTaskHandler = (id) => {
    setList(list.filter((task) => task.key !== id));
  };
  const submitHandler = (newTask) => {
    setList((prevList)=> [...prevList, newTask]);
  };

  return (
    <div>
      <h1>Lame To Do List</h1>
      <TodoAddForm onSubmit={submitHandler} />
      <TodoList onClicked={deleteTaskHandler} list={list} />
    </div>
  );
}

export default App;
