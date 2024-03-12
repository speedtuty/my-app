import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

const Todoaction = ({ task, deletedTask, toggleCompleted }) => {
  const handleChange = () => {
    toggleCompleted(task.id);
  };

  return (
    // <div className="todo-action">
    //   <div className="col-md-12">
    //   <input type="checkbox" checked={task.completed} onChange={handleChange} />
    //   <p className="container">{task.text}</p>

    //   <Button onClick={() => deletedTask(task.id)} className="todo-button" size="lg"> Delete </Button>
    // </div>
    //  </div>
 <div className="container">
    <InputGroup className="mb-3">
      <InputGroup.Checkbox
        aria-label="Checkbox for following text input"
        checked={task.completed}
        onChange={handleChange}
        className="todo-checkbox"
      />

      <InputGroup.Text  className="todo-input1" >
     
        <p>{task.text}</p>
      </InputGroup.Text>

      <Button
        onClick={() => deletedTask(task.id)}
        className="todo-button" 
        size="lg"
      >
        Delete
      </Button>
    </InputGroup>
    </div>  
  );
};

export default Todoaction;
