import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }
  // componentWillMount() {
  //   console.log("componentWillMount");
  // }
  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  // }
  // componentWillUpdate() {
  //   console.log("componentWillUpdate");
  // }
  // componentWillReceiveProps() {
  //   console.log("componentWillReceiveProps");
  // }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.body}</p>
      </div>
    );
  }
}

export default Test;
