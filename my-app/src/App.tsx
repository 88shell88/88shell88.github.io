import React from "react";

function App() {
  const audio = new Audio(
  );

  const start = () => {
    audio.play();
  };

  return (
    <div>
      <button onClick={start}>Play</button>
      <audio
        controls
        src="./piano-mp3/A0.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
    </div>
  );
}

export default App;
