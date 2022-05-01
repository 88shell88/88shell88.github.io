import React from "react";

function App() {
  const audio = new Audio(
    "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
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
