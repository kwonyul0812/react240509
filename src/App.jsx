import React, { useState } from "react";

function MyBox() {
  const [text, setText] = useState("");
  return (
    <div>
      <input type="text" onInput={(e) => setText(e.target.value)} />
      <p>{text}</p>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyBox />
      <hr />
      <MyBox />
    </div>
  );
}

export default App;
