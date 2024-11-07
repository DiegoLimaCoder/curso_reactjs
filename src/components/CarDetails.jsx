/* eslint-disable react/prop-types */
function CarDetails({ brand, color }) {
  return (
    <>
      <h2>Detalhes do carro</h2>
      <ul>
        <li>{brand}</li>
        <li>{color}</li>
      </ul>
    </>
  );
}
export default CarDetails;
