import "./App.css";
import { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks([...tasks, todo]);
    setTodo("");
  };

  const deleteTask = (text) => {
    const newTasks = tasks.filter((todo) => {
      return todo !== text;
    });
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>React ToDo App</h1>

      <div className="input-wrapper">
        <input
          type="text"
          name="todo"
          placeholder="New task"
          value={todo}
          onChange={(event) => {
            setTodo(event.target.value);
          }}
        ></input>
        <button className="add-button" onClick={addTask}>
          Add task
        </button>
      </div>

      {tasks.length > 0 ? (
        <ul className="todo-list">
          {tasks.map((todo, index) => (
            <div className="todo">
              <li key={index}>{todo}</li>
              <button
                className="delete-button"
                onClick={() => {
                  deleteTask(todo);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty"></div>
      )}
    </div>
  );
};

export default App;
