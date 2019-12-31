import React, { Component } from "react";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      obj: {}
    };
  }

  receiveDataFromComp1 = obj => {
    this.setState({ obj });
  };
  render() {
    return (
      <div>
        <Comp1 sendData={this.receiveDataFromComp1} />
        <Comp2 sendInfo={this.state.obj} />
      </div>
    );
  }
}
