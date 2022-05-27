import { ListItem, Typography } from "@material-ui/core";

import React from "react";

function Todo({ todo, removeTodo }) {

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <ListItem style={{ display: "flex" }}>
      <Typography
        variant="body1"
        style={{
          textDecoration: todo.completed ? "line-through" : null
        }}
      >
        {todo.movie} {todo.genre} {todo.rating}
      </Typography>
      <div style={{color:"red"}} onClick={handleRemoveClick}>
         . Delete
      </div>
    </ListItem>
  );
}

export default Todo;