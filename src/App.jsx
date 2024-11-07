import CarDetails from "./components/CarDetails";
import { ShowUserName } from "./components/ShowUserName";

function App() {
  return (
    <>
      <h1>Avançando no React</h1>
      {/*As Props do componente */}
      <ShowUserName name="Diego" />
      {/* Desestruturação de props */}
      <CarDetails brand="BMW" color="Red" />
    </>
  );
}

export default App;
