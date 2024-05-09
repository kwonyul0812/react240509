import React from "react";

function App(props) {
  const son = {
    firstName: "흥민",
    lastName: "손",
    address: "서울 강남구",
    country: "대한민국",
    married: true,
  };

  return (
    <div>
      <ul>
        <li>성 : {son.firstName}</li>
        <li>이름 : {son.lastName}</li>
        <li>주소 : {son.address}</li>
        <li>국가 : {son.country}</li>
        <li>결혼여부 : {son.married ? "기혼" : "미혼"}</li>
      </ul>
    </div>
  );
}

export default App;
