import { useState } from "react";
import Todoaction from "./Todoaction";
import Button from "react-bootstrap/Button";


const Todolist = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Good Morning",
      completed: false,
    },

    {
      id: 2,
      text: "Reading books",
      completed: false,
    },
    {
      id: 3,
      text: "Go to work",
      completed: false,
    },
  ]);

  const [text, setText] = useState("");
  console.log(tasks);

  const addTask = (text) => {
    const tasknew = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTasks([...tasks, tasknew]);
    setText("");
  };

  const deletedTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="container">
      <h1 className="todo-heading">Todo App</h1>


      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        size="lg"
        placeholder="Enter your task" className="todo-input"
      />
      <Button onClick={() => addTask(text)} size="lg">
        Add Task
      </Button>
      {tasks.map((task) => (
        <Todoaction
          task={task}
          deletedTask={deletedTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </div>
  );
};

export default Todolist;
