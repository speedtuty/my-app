import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class FormData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      email: "",
      password: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleClick = () => {
    console.log(this.state);
    this.setState({
      Name: "",
      email: "",
      password: "",
    });
  };
  render() {
    return (
      <div className="container form-style">
        <h2>Registration Form</h2>
        <Form.Control
          name="Name"
          type="text"
          placeholder="Name"
          value={this.state.Name}
          onChange={this.handleChange}
        />
        <br />
        <Form.Control
          name="email"
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <br />
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br />
        <Button variant="primary" size="lg" onClick={this.handleClick}>
          Submit
        </Button>
      </div>
    );
  }
}
export default FormData;
