import React from "react";

function MyButton({ name, sx }) {
  return <button style={sx}>{name}</button>;
}

function App(props) {
  return (
    <div>
      {/*  두 개의 MyButton 컴포넌트를 사용 sx, name */}
      <MyButton
        name="버튼1"
        sx={{
          backgroundColor: "lightblue",
        }}
      />
      <MyButton
        name="버튼2"
        sx={{
          backgroundColor: "coral",
        }}
      />
    </div>
  );
}

export default App;
