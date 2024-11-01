import { FristComponent } from "./components/FristComponent";
import { MyComponent } from "./components/MyComponent";

function App() {
  const renderSomthing = (x) => {
    if (x) {
      return (
        <div>
          <p>X é verdadeiro</p>
          <FristComponent />
        </div>
      );
    } else {
      return (
        <div>
          <p>X é falso</p>;
          <MyComponent />;
        </div>
      );
    }
  };

  return (
    <>
      <h1>Fundamentos do React</h1>
      {/* Função de renderização */}
      {renderSomthing(true)}
    </>
  );
}

export default App;
