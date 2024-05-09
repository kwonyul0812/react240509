function MyHeader() {
  return (
    <div>
      <h1> hello header </h1>
      <h3> hello sub header</h3>
    </div>
  );
}

function MyFooter() {
  return (
    <ul>
      <li>link1</li>
      <li>link2</li>
    </ul>
  );
}

// 다른  컴포넌트 안에 컴포넌트를 작성하면 안됨
function MyNav() {
  return (
    <>
      <a href="#">link1</a>
      <a href="#">link2</a>
    </>
  );
}

function App() {
  return (
    <div>
      <MyHeader />
      <MyFooter />
      <MyNav />
    </div>
  );
}

export default App;
