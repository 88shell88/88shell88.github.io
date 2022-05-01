import React from "react";


function App() {
  const audio = new Audio(
    "https://github.com/88shell88/88shell88.github.io/blob/main/my-app/src/piano-mp3/A0.mp3"
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
