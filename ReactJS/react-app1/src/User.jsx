import React, { Component } from "react";

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome to User Component",
      person: {
        fname: "Murali",
        lname: "Krishna"
      },
      users: []
    };

    console.log("Constructor Triiggered");
  }
  showUsers = () => {
    this.setState({ users: ["Ram", "Ravi", "Kiran"] });
  };
  render() {
    console.log("Render method triggered");
    return (
      <div>
        <button onClick={this.showUsers}>Show Users</button>
        <h1>{this.state.message}</h1>
        <p>Person First Name : {this.state.person.fname}</p>

        <ul>
          {this.state.users.map(user => {
            return <li key={user}>{user}</li>;
          })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    console.log("Component Did mount is Triggered");
  }
}
