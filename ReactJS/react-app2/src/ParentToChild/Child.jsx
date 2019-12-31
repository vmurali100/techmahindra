import React, { Component } from "react";

export default class Child extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Hello World from Child</h2>
      </div>
    );
  }
}
