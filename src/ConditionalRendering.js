import { Component } from "react";
import './App.css';

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: 0,
    };
  }
  handleClick = () => {
    this.setState({ isLogged: true });
  };
  render() {
    return (
      <div className="style1">
        <h2> Conditional Rendering</h2>
        {this.state.isLogged ? (
          <p>LoggedIn</p>
        ) : (
          <button onClick={this.handleClick}>Signin</button>
        )}
    {this.state.isLogged&& <p>condition is true only</p>}
      </div>

    );
  }
}
export default ConditionalRendering;
