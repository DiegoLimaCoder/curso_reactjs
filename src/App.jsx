import Container from "./components/Container";

function App() {
  return (
    <>
      <h1>Avançando no React</h1>
      {/* Children props */}
      <Container>
        <p>Componente filho</p>
      </Container>
    </>
  );
}

export default App;
