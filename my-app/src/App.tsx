import React from "react";


function App() {
  const audio = new Audio(
    './piano-mp3/A0.mp3'
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
