import { useState } from "react";
import Message from "./components/Message";
import ChangeMessage from "./components/ChangeMessage";

function App() {
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };
  return (
    <>
      <h1>Avançando no React</h1>
      {/* State lift */}
      <Message msg={message} />
      <ChangeMessage handleMessage={ handleMessage} />
    </>
  );
}

export default App;
