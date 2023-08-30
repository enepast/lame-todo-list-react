import React from "react";

export const Task = (props) => {
  const clickEventHandler = () => {
    props.onDelete(props.id);
  };
  return <div onClick={clickEventHandler}>{props.task}</div>;
};

export default Task;
