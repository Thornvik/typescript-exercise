import React, { useState } from "react";
import "./App.css";

import Input from "./components/input/Input";
import Output from "./components/output/Output";

function App() {
  const [values, setValue] = useState("hello");

  return (
    <div className="App">
      <Output name="Ture" paragraph="hipster ipsum"></Output>
      <Output name="milena" paragraph="hipster ipsum"></Output>
      <Input name={values}></Input>
    </div>
  );
}

export default App;
