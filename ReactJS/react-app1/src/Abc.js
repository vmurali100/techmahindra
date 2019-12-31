import React from "react";
import Cbd from "./Cbd";

function Abc() {
  var myName = "Murali Krishna";
  var person = {
    fname: "Ram",
    lname: "Krishna"
  };
  return (
    <div>
      <Cbd />
      <h1>Heelo I am FROm ABC - Welcome {myName}</h1>
      <hr></hr>
      <p>Person First Name : {person.fname}</p>
      <p>Person First Name : {person.lname}</p>
    </div>
  );
}

export default Abc;
