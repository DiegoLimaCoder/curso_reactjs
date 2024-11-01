export const Events = () => {
  let count = 1;

  return (
    <div>
      <button onClick={() => console.log(`button foi clicado ${count++}x`)}>
        Clique aqui
      </button>
    </div>
  );
};
