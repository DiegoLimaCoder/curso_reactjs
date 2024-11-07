// eslint-disable-next-line react/prop-types
function ChangeMessage({ handleMessage }) {
  const messages = ["OI", "OLÁ"];
  return (
    <>
      <button onClick={() => handleMessage(messages[0])}>Messagem 1</button>
      <button onClick={() => handleMessage(messages[1])}>Messagem 2</button>
    </>
  );
}

export default ChangeMessage;
