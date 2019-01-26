import React, { Component } from "react";

class Test extends Component {
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }
  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }
  render() {
    return (
      <div>
        <h1>Test</h1>
      </div>
    );
  }
}

export default Test;
