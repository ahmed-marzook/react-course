import { useState } from "react";
import "./App.css";
import Pad from "./Pad";
import padsData from "../pads";

function App() {
  const [pads, setPads] = useState(padsData);

  function handleClick(id) {
    console.log(id);
    setPads((prev) =>
      prev.map((item) => {
        return item.id === id ? { ...item, on: !item.on } : item;
      })
    );
  }

  const buttonElements = pads.map((pad) => (
    <Pad
      key={pad.id}
      color={pad.color}
      onHandle={handleClick}
      id={pad.id}
      on={pad.on}
    />
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
