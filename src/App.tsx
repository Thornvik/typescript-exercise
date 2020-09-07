import React, { useState, ChangeEvent } from "react";
import "./App.css";

import Input from "./components/input/Input";
import Output from "./components/output/Output";

function App() {
  const [name, setName] = useState("hello World");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div className="App">
      <Output
        name="Why hello there"
        paragraph="I'm baby hexagon bicycle rights enamel pin butcher slow-carb. Direct trade lo-fi flannel typewriter. Retro small batch mumblecore tumblr biodiesel kale chips poke freegan semiotics keffiyeh keytar cold-pressed prism. Iceland twee lomo quinoa tofu celiac. Direct trade farm-to-table gastropub, lumbersexual pickled seitan hexagon poutine unicorn. Bespoke farm-to-table pitchfork keytar hot chicken before they sold out readymade quinoa, banjo venmo lo-fi fam put a bird on it. Selfies austin everyday carry, brooklyn vexillologist hot chicken bespoke."
      ></Output>
      <Output
        name={name}
        paragraph="out but above will display what you type in inputfield"
      ></Output>
      <Input name={name} onChange={handleChange}></Input>
    </div>
  );
}

export default App;
