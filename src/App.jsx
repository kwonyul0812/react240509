import React from "react";

function App(props) {
  return (
    <div>
      {/* file을 보낼때는 항상 post 방식으로 보내야함, encType="multipart/form-data" 작성 필수 */}
      <form action="/path" method="post" encType="multipart/form-data">
        이름 <input type="text" name="name" />
        <br />
        <input type="file" name="file" />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
