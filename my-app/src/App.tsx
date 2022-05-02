import React from "react";
import { notes } from './piano-mp3';
// import n2 from './piano-mp3/B0.mp3';
// import n3 from './piano-mp3/C1.mp3';
// import n4 from './piano-mp3/D1.mp3';
// import n5 from './piano-mp3/E1.mp3';
// import n6 from './piano-mp3/F1.mp3';
// import n7 from './piano-mp3/G1.mp3';
// import n8 from './piano-mp3/A1.mp3';
// import n9 from './piano-mp3/B1.mp3';
// import n10 from './piano-mp3/C1.mp3';
// import n11 from './piano-mp3/D1.mp3';
// import n12 from './piano-mp3/E1.mp3';
// import n13 from './piano-mp3/F1.mp3';
// import n14 from './piano-mp3/G1.mp3';
// import n15 from './piano-mp3/A1.mp3';
// import n16 from './piano-mp3/B1.mp3';
// import n17 from './piano-mp3/C2.mp3';
// import n18 from './piano-mp3/D2.mp3';
// import n19 from './piano-mp3/E2.mp3';
// import n20 from './piano-mp3/F2.mp3';
// import n21 from './piano-mp3/G2.mp3';
// import n22 from './piano-mp3/A2.mp3';
// import n23 from './piano-mp3/B2.mp3';
// import n24 from './piano-mp3/C3.mp3';
// import n25 from './piano-mp3/D3.mp3';
// import n26 from './piano-mp3/E3.mp3';
// import n27 from './piano-mp3/F3.mp3';
// import n28 from './piano-mp3/A3.mp3';
// import n29 from './piano-mp3/B3.mp3';
// import n30 from './piano-mp3/C4.mp3';
// import n31 from './piano-mp3/D4.mp3';
// import n32 from './piano-mp3/E4.mp3';
// import n33 from './piano-mp3/F4.mp3';
// import n34 from './piano-mp3/G4.mp3';
// import n35 from './piano-mp3/A4.mp3';
// import n36 from './piano-mp3/B4.mp3';
// import n37 from './piano-mp3/C5.mp3';
// import n38 from './piano-mp3/D5.mp3';
// import n39 from './piano-mp3/E5.mp3';
// import n40 from './piano-mp3/F5.mp3';
// import n41 from './piano-mp3/A5.mp3';
// import n42 from './piano-mp3/B5.mp3';
// import n43 from './piano-mp3/C6.mp3';
// import n44 from './piano-mp3/D6.mp3';
// import n45 from './piano-mp3/E6.mp3';
// import n46 from './piano-mp3/F6.mp3';
// import n47 from './piano-mp3/G6.mp3';
// import n48 from './piano-mp3/A6.mp3';
// import n49 from './piano-mp3/B6.mp3';
// import n50 from './piano-mp3/C7.mp3';
// import n51 from './piano-mp3/A0.mp3';
// import n52 from './piano-mp3/A0.mp3';
// import n53 from './piano-mp3/A0.mp3';
// import n54 from './piano-mp3/A0.mp3';
// import n55 from './piano-mp3/A0.mp3';
// import n56 from './piano-mp3/A0.mp3';
// import n57 from './piano-mp3/A0.mp3';
// import n58 from './piano-mp3/A0.mp3';
// import n59 from './piano-mp3/A0.mp3';
// import n60 from './piano-mp3/A0.mp3';
// import n61 from './piano-mp3/A0.mp3';
// import n62 from './piano-mp3/A0.mp3';
// import n63 from './piano-mp3/A0.mp3';
// import n64 from './piano-mp3/A0.mp3';
// import n65 from './piano-mp3/A0.mp3';
// import n66 from './piano-mp3/A0.mp3';
// import n67 from './piano-mp3/A0.mp3';
// import n68 from './piano-mp3/A0.mp3';
// import n69 from './piano-mp3/A0.mp3';
// import n70 from './piano-mp3/A0.mp3';
// import n71 from './piano-mp3/A0.mp3';
// import n72 from './piano-mp3/A0.mp3';
// import n73 from './piano-mp3/A0.mp3';
// import n74 from './piano-mp3/A0.mp3';
// import n75 from './piano-mp3/A0.mp3';
// import n76 from './piano-mp3/A0.mp3';
// import n77 from './piano-mp3/A0.mp3';
// import n78 from './piano-mp3/A0.mp3';
// import n79 from './piano-mp3/A0.mp3';
// import n80 from './piano-mp3/A0.mp3';
// import n81 from './piano-mp3/A0.mp3';
// import n82 from './piano-mp3/A0.mp3';
// import n83 from './piano-mp3/A0.mp3';
// import n84 from './piano-mp3/A0.mp3';
// import n85 from './piano-mp3/A0.mp3';
// import n86 from './piano-mp3/A0.mp3';
// import n87 from './piano-mp3/A0.mp3';
// import n88 from './piano-mp3/A0.mp3';
// import n89 from './piano-mp3/A0.mp3';

var fs = require('fs');   
var fileNames = fs.readdirSync(dirPath);

fileNames.forEach((element: string) => {
  import(element)
});

function App() {
  let arr: { [x: string]: any; } // = ['./piano-mp3/A0.mp3','./piano-mp3/B0.mp3','./piano-mp3/C1.mp3']
  const audio = new Audio(
    './piano-mp3/A0.mp3'
  );
  notes.forEach((n: string | number) => {
    arr[n] = `../piano-mp3/${n}.mp3`;
  });

  const start = () => {
    arr[0].play();
  };

  return (
    <div>
      <button onClick={start}>Play</button>
    </div>
  );
}

export default App;
function dirPath(dirPath: any) {
  throw new Error("Function not implemented.");
}

