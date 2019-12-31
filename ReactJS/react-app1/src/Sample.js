import React from "react";
import User from "./User";
// var users = [];

function Sample() {
  // var users = ["Ram", "Ravi", "Krishna", "Sam", "krish"];
  return (
    <div>
      <button onClick={sayHello}>Click Me</button> <br />
      <User />
    </div>
  );
}
// function showUsers() {
//   users = ["Ram", "Ravi", "Krishna", "Sam", "krish"];
// }
function sayHello() {
  alert("Helo World");
}

export default Sample;
