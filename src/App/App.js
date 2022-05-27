import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    // adds new todo to beginning of todos array
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const login = (e) => {
    e.preventDefault();
    console.log(email, password);
    const userData = {
      email,
      password,
    };
    localStorage.setItem("token-info", JSON.stringify(userData.email));
   

    setEmail("");
    setPassword("");
  };

  const logout = () => {
    localStorage.removeItem("token-info");

    window.location.reload();
  };
;
  
  console.log(localStorage.getItem("token-info"));

  return (
    <div className="App">
      {localStorage.getItem("token-info") === null ? (
        <>
          <h1 className="user_m">User Management System</h1>
          <form className="login__form" action="">
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Name"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
            />
            <button type="submit" onClick={login}>
              Login
            </button>
          </form>
        </>
      ) : (
        <>
          <h1 className="user_m">User Management System</h1>
          <button onClick={logout} className="logout__button">
            logout
          </button>

          <h1>
            {localStorage.getItem("token-info").replace(/['"]+/g, "")} is logged
            in
          </h1>
          <h4 className="watchlist__heading">Your Watchlist</h4>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleComplete={toggleComplete}
          />
        </>
      )}
    </div>
  );
}

export default App;
