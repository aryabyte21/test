import { ListItem, Typography } from "@material-ui/core";
import "./Todo.css";
import React from "react";

function Todo({ todo, removeTodo }) {

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <ListItem style={{ display: "flex", margin: "10px" }}>
      <Typography
        variant="body1"
        style={{
          textDecoration: todo.completed ? "line-through" : null,
          margin: "10px",
        }}
      >
        {" "}
        {todo.movie}
      </Typography>

      <Typography
        variant="body1"
        style={{
          textDecoration: todo.completed ? "line-through" : null,
          margin: "10px",
        }}
      >
        {" "}
        {todo.genre}
      </Typography>

      <Typography
        variant="body1"
        style={{
          textDecoration: todo.completed ? "line-through" : null,
          margin: "10px",
        }}
      >
        {" "}
        {todo.rating}
      </Typography>
      <div style={{ color: "red" }} onClick={handleRemoveClick}>
        Delete
      </div>
    </ListItem>
  );
}

export default Todo;