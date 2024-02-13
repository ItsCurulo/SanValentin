import { useState } from "react";
import "./App.css";

const phrases = [
  "No ",
  "¿Estás segura?",
  "¿Segura de verdad?",
  "Irene porfa",
  "No me hagas esto",
  "Voy a lloraaar :(",
  "Me rompes el corazón",
  "Cada 'no' me destruye un poco más",
  "NO SEAAAAS MALAAA",
  "Por fa por fa por fa",
  "AL FINAL NO PEGAMOS 😡",
  "PERO SERÁS CHIQUITAAA",
  "DI QUE SI AAA",
  "DI QUE SI AAAA",
  "DI QUE SI AAAAA",
  "DI QUE SI AAAAAA",
  "DI QUE SI AAAAAAA",
  "DI QUE SI AAAAAAAA",
  "DI QUE SI AAAAAAAAA",
  "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButton() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            className="gif"
          />
          <div className="text">BIEEEEN!!!</div>
        </>
      ) : (
        <>
          <img
            alt="bear with hearts"
            src="https://c.tenor.com/Vy46BTSo3hsAAAAC/tenor.gif"
            className="gif"
          />
          <div>¿Quieres ser mi pareja en San Valentín?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButton()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
