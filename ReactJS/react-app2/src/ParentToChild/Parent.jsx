import React, { Component } from "react";
import Child from "./Child";

var someValues = "Hello some";
export default class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello From Parent",
      person: {
        fname: "Ram"
      },
      users: ["Ravi", "Kiran"]
    };
  }

  render() {
    return (
      <div>
        <h2>Hello World from Parent</h2>

        {/* If we need to send Values separately */}
        {/* <Child
          abc={this.state.message}
          obj={this.state.person}
          arr={this.state.users}
        /> */}

        <Child {...this.state} some={someValues} />
      </div>
    );
  }
}
