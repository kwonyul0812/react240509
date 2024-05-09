function MyComponent() {
  // 최상위 컴포넌트 사용하지 않을 때 -> fragment <></> 사용

  return (
    <>
      <p>test1, test2</p>
      <p>test3, test4</p>
    </>
  );
}

function MyComp() {
  // 최상위 컴포넌트는 1개임
  return (
    <div>
      <p>Lorem ipsum</p>
      <p>test</p>
    </div>
  );
}

function MyTag() {
  // jsx 코드가 여러줄일떄는 () 사용
  return (
    <div>
      hello tag<p>Lorem ipsum.</p>
      <p>Est, quos?</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <MyTag />
      <MyComp />
      <MyComponent />
    </div>
  );
}

export default App;
