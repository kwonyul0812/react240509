import React, { useState } from "react";

function App(props) {
  const [car, setCar] = useState({
    name: "",
    model: "",
    company: "",
    price: "",
  });

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder={"이름"}
          onChange={(e) => {
            const { ...newCar } = car;
            newCar.name = e.target.value;
            setCar(newCar);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder={"모델"}
          onChange={(e) => {
            const { ...newCar } = car;
            newCar.model = e.target.value;
            setCar(newCar);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder={"회사"}
          onChange={(e) => {
            const { ...newCar } = car;
            newCar.company = e.target.value;
            setCar(newCar);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder={"가격"}
          onChange={(e) => {
            const { ...newCar } = car;
            newCar.price = e.target.value;
            setCar(newCar);
          }}
        />
      </div>
      <ul>
        <li>이름: {car.name}</li>
        <li>모델: {car.model}</li>
        <li>회사: {car.company}</li>
        <li>가격: {car.price}</li>
      </ul>
    </div>
  );
}

export default App;
