// Imagem em assets
import placeholderImage from "./assets/FFF.svg";
function App() {
  return (
    <>
      <h1>Avançando no React</h1>
      <div>
        {/* Imagem em public */}
        <img src="/600x400.svg" alt="Imagem 600x400" />
      </div>

      <br />

      <div>
        {/* Imagem em assets */}
        <img src={placeholderImage} alt="imagem 700x 500" />
      </div>
    </>
  );
}

export default App;
