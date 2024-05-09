function MyTag() {
  const a = <h3> hello component </h3>;
  return a;
}

function MyContent() {
  return <p> my content </p>;
}

function App() {
  return (
    <>
      <div>
        <h1>hello react</h1>
        <MyTag />
        <MyTag />
        {/* <h3> hello component </h3> */}
        <MyContent />
        <MyContent />
        {/* <p> my content </p> */}
      </div>
    </>
  );
}

export default App;
