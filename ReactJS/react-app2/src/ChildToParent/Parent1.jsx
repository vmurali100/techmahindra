import React, { Component } from "react";
import Child1 from "./Child1";

export default class Parent1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      person: {},
      users: []
    };
  }
  getDataFromChild = info => {
    console.log(info);
    this.setState({
      message: info.message,
      person: info.person,
      users: info.users
    });
  };
  render() {
    return (
      <div>
        <Child1 getDataFunc={this.getDataFromChild} />
        <hr />
        <h3>Message From Child : {this.state.message}</h3>
        <hr />
        <h4>Person First Name :{this.state.person.fname}</h4>
        <hr />
        <ul>
          {this.state.users.map(user => {
            return <li key={user}>{user}</li>;
          })}
        </ul>
      </div>
    );
  }
}
