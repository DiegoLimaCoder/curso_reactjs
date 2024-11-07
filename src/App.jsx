import CarDetails from "./components/CarDetails";

function App() {
  const cars = [
    { id: 1, brand: "ferrari", color: "red" },
    { id: 2, brand: "lamborghini", color: "yellow" },
    { id: 3, brand: "porsche", color: "blue" },
  ];

  return (
    <>
      <h1>Avançando no React</h1>
      {/* Rederização de lista com componente */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} />
      ))}
    </>
  );
}

export default App;
