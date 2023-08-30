import React, { useState } from "react";

export const TodoAddForm = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [task, setTask] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit({ key: Math.random(), task: enteredValue });
    setEnteredValue("");
  };

  const valueHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={valueHandler} value={enteredValue}></input>
        <button type="submit">Add task</button>
      </form>
    </div>
  );
};
