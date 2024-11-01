export const Events = () => {
  const handleClick = () => {
    console.log("executou");
  };

  const printMyName = (name) => {
    console.log("olá " + name);
  };

  return (
    <div>
      <button onClick={handleClick}>Clique aqui</button>
      <button onClick={() => printMyName("Diego")}>Mostra nome</button>
    </div>
  );
};
