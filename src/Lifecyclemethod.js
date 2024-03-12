import { Component } from "react";

class Lifecyclemethod extends Component {
    constructor(props) {
        super(props);
        this.state={
            favouritefood:"Rice",
        }
        }
        componentDidMount() {
            setTimeout((() =>{
                this.setState({favouritefood:"pizza"})
            }),1000)
        }

      render() {
      return(
        <div>
        <h1> My favouritefood {this.state.favouritefood}</h1>
        </div>
      )
    }}
export default Lifecyclemethod;



