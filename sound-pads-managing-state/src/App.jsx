import { useState } from "react";
import "./App.css";
import Pad from "./Pad";
import padsData from "../pads";

function App() {
  const [pads, setPads] = useState(padsData);

  const buttonElements = pads.map((pad) => (
    <Pad key={pad.id} color={pad.color} />
  ));

  return (
    <>
      <main>
        <div className="pad-container">{buttonElements}</div>
      </main>
    </>
  );
}

export default App;
