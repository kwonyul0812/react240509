import React from "react";

function MyButton(props) {
  const text = props.name || "클릭";
  return <button>{text}</button>;
}

function App(props) {
  return (
    <div>
      <MyButton name="버튼1" />
      {/* <button>버튼1</button>*/}
      <MyButton />
      {/* <button>클릭</button>*/}
    </div>
  );
}

export default App;
