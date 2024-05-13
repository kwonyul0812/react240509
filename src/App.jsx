import React, { useState } from "react";

function App(props) {
  // input 입력한 값 list에 추가하기
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  function handleInput() {
    const [...newList] = list;
    newList.push(text);
    setList(newList);
    setText("");
  }

  return (
    <div>
      <input
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleInput}>추가</button>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
