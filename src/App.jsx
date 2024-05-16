import React from "react";
import axios from "axios";

function App(props) {
  function handle200() {
    axios.get("/api/main43/sub1").then((res) => {
      console.log(res);
    });
  }

  function handle400() {
    axios
      .get("/api/main43/sub2")
      .then((res) => {})
      .catch((err) => {
        if (err.response.status === 400) {
          console.log("잘못된 요청입니다");
        } else if (err.response.status === 404) {
          console.log("존재하지 않는 요청입니다.");
        } else if (err.response.status === 500) {
          console.log("서버에서 오류가 발생하였습니다.");
        }
      });
  }

  function handle500() {
    axios
      .get("/api/main43/sub6")
      .then((res) => {})
      .catch((err) => {
        if (err.response.status === 400) {
          console.log("잘못된 요청입니다");
        } else if (err.response.status === 404) {
          console.log("존재하지 않는 요청입니다.");
        } else if (err.response.status === 500) {
          console.log("서버에서 오류가 발생하였습니다.");
        }
      });
  }

  function handleResponse() {
    axios
      .get("/api/main43/sub1")
      .then((res) => console.log("정상적으로 응답 했습니다."))
      .catch((err) => {
        if (err.response.status === 401) {
          console.log("401에러 발생");
        } else if (err.response.status === 403) {
          console.log("403에러 발생");
        }
      })
      .finally(() => {
        // finally : 응답 코드가 200이든 아니든 항상 실행됨
        console.log("항상 시행되는 메소드");
      });
  }

  return (
    <div>
      <button onClick={handle200}>200응답</button>
      <button onClick={handle400}>400응답</button>
      <button onClick={handle500}>500응답</button>

      {/* 200, 401, 403 응답일 때 각각 다른 일하는 코드 작성*/}
      <button onClick={handleResponse}>응답 코드에 따라 다른 일하기</button>
    </div>
  );
}

export default App;
