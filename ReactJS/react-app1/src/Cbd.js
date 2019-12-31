import React from "react";

function Cbd() {
  var users = ["Ram", "Ravi", "Krishna", "Sam", "krish"];
  return (
    <div>
      <ul>
        {users.map(val => {
          return <li>{val}</li>;
        })}
      </ul>
    </div>
  );
}

export default Cbd;
