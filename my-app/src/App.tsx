import React from "react";
import sound from "./piano-mp3/A0.mp3";


function App() {
  const audio = new Audio(
    sound
  );

  const start = () => {
    audio.play();
  };

  return (
    <div>
      <button onClick={start}>Play</button>
    </div>
  );
}

export default App;
