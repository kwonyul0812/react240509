import React from "react";

function App(props) {
  const obj = {
    age: 30,
    name: "John Doe",
    email: "John@example.com",
    password: 1234567890,
  };

  return (
    <div>
      <ul>
        <li>age : {obj.name}</li>
        <li>name : {obj.name}</li>
        <li>email : {obj.email}</li>
        <li>pw ass: {obj.password}</li>
      </ul>
    </div>
  );
}

export default App;
