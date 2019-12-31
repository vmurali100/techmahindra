import React, { Component } from "react";

export default class Child1 extends Component {
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

  sendMessaage = () => {
    this.props.getDataFunc(this.state);
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={this.sendMessaage}>Send Message</button>
      </div>
    );
  }
}
