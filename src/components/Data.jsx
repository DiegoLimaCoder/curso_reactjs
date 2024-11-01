import { useState } from "react";

export const Data = () => {
  const [changerNumber, setChangerNumber] = useState(15);

  return (
    <>
      <h1>UseState</h1>
      <p>Valor: {changerNumber} </p>
      <button onClick={() => setChangerNumber(100)}>Mudar variável</button>
    </>
  );
};
