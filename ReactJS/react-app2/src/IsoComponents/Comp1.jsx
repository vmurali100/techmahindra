import React, { Component } from "react";
import axios from "axios";
export default class Comp1 extends Component {
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

  sendDataToComp2 = () => {
    axios
      .get(
        "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"
      )
      .then(response => {
        console.log(response.data);
        this.props.sendData(response.data);
      });
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={this.sendDataToComp2}>Send Data TO Comp2</button>
      </div>
    );
  }
}
