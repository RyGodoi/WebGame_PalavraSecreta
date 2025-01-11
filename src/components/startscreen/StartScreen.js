import "./StartScreen.css";

const StartScreen = ({ iniciar }) => {
  return (
    <div className="start">
      <h1>Palavra Secreta</h1>
      <p>Clique no botão abaixo para começar a jogar</p>
      <button onClick={iniciar}>Começar o jogo</button>
    </div>
  );
};

export default StartScreen;
