import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    movie: "",
    genre: "",
    rating: "",
    completed: false,
  });

  function handleMovieInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setTodo({ ...todo, movie: e.target.value });
  }
  function handleGenreInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setTodo({ ...todo, genre: e.target.value });
  }
    function handleRatingInputChange(e) {
      // e.target.value contains new input from onChange
      // event for input elements
      setTodo({ ...todo, rating: e.target.value });
    }
  function handleSubmit(e) {
    e.preventDefault(); // prevents browser refresh
    // trim() gets rid of string whitespace
    if (todo.movie.trim() && todo.genre.trim() && todo.rating.trim()) {
      addTodo({ ...todo, id: uuid() });
      setTodo({ ...todo, movie: "", genre: "", rating: "" });
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        label="Movie"
        type="text"
        name="movie"
        value={todo.movie}
        onChange={handleMovieInputChange}
      />
      <TextField
        label="Genre"
        type="text"
        name="genre"
        value={todo.genre}
        onChange={handleGenreInputChange}
      />
      <TextField
        label="Rating"
        type="text"
        name="rating"
        value={todo.rating}
        onChange={handleRatingInputChange}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default TodoForm;
