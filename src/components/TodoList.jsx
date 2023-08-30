import React from "react";
import { Task } from "./Task";

export const TodoList = (props) => {
    const deleteHandler = (id) => {
        props.onClicked(id);
    }

  return (
    <ul>
      {props.list.map((task) => (
        <Task key={task.key} id={task.key} task={task.task} onDelete={deleteHandler}/>
      ))}
    </ul>
  );
};
