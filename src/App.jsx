import ExecuteFunction from "./components/ExecuteFunction";

function App() {
  return (
    <>
      <h1>Avançando no React</h1>
      {/* Funções em props */}
      <ExecuteFunction myFunction={() => alert("Hello world !")} />
    </>
  );
}

export default App;
