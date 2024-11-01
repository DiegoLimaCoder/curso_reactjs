export const ConditionalRender = () => {
  const name = "Diego";
  return (
    <>
      {/* Render condicional */}
      <h3>Isso será exibido ?</h3>
      {name === "Leandro" ? (
        <div>
          <p>Olá Diego</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado</p>
        </div>
      )}
    </>
  );
};
