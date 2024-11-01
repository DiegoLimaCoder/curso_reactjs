import "./App.css";
import { FristComponent } from "./components/FristComponent";

function App() {
  const name = "Diego";
  const info = {
    name: name,
    age: 21,
    job: "programador",
  };
  return (
    <>
      <h1>Fundamentos do React</h1>
      {/* Utilizando o componente */}
      <FristComponent />

      {/* Template Expression */}
      <p>2 + 2 = {2 + 2}</p>
      <p>Bem vindo: {name}</p>
      <p>
        Meu nome é {info.name} tenho {info.age} anos e no futuro serei um
        execelente {info.job}
      </p>
      {/* Template Expression */}
    </>
  );
}

export default App;
