import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component{
  constructor(props){
    super(props);
    console.log("Hello");
    //before mounting component;
  }
  state = {
    count: 0 
  };
  add = () => {
    this.setState(current => ({count : (this.state.count +1)}));
  };
  minus = () => {
    this.setState(current =>({count : (this.state.count -1)}));
  };
  componentDidMount(){
    console.log("component rendered");
    //after mounting component
  }
  componentDidUpdate(){
    console.log("updated");
  }
  componentWillUnmount(){
    console.log("Good Bye ")
  }
  // adding data we put on our html 
  render(){
    console.log("render");
    return (
      <div>
        <h1> The number is: {this.state.count} </h1>
        <button onClick={this.add}>Add</button>
        <button onClick = {this.minus}>minus</button>
      </div>
    );
  }
}


export default App;
