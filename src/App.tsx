import React, { useState, ChangeEvent } from "react";
import "./App.css";

import Input from "./components/input/Input";
import Output from "./components/output/Output";

function App() {
  const [name, setName] = useState("hello");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div className="App">
      <Output name="ture" paragraph="hipster ipsum"></Output>
      <Output name={name} paragraph="hipster ipsum"></Output>
      <Input name={name} onChange={handleChange}></Input>
    </div>
  );
}

export default App;
