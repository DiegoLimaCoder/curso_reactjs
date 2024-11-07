/* eslint-disable react/prop-types */
function CarDetails({ brand, color }) {
  return (
    <>
      <h2>Detalhe do carro</h2>
      <ul>
        <li>{brand}</li>
        <li>{color}</li>
      </ul>
    </>
  );
}
export default CarDetails;
