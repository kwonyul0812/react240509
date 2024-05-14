import React, { useState } from "react";

function MyButtom({ count, onClick }) {
  return (
    <div>
      <button onClick={onClick}>CLICK {count}</button>
    </div>
  );
}

function MyBox({ count }) {
  return <div>{count}번 클릭됨</div>;
}

function App(props) {
  const [count, setCount] = useState(0);

  function handleUpdateCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <MyButtom count={count} onClick={handleUpdateCount} />
      <hr />
      <MyBox count={count} />
    </div>
  );
}

export default App;
