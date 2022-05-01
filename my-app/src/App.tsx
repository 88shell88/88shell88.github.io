import React from "react";

function App() {
  const audio = new Audio(
    "https://github.com/fuhton/piano-mp3/blob/master/piano-mp3/A0.mp3"
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
