import React, { useState, ChangeEvent } from "react";
import "./App.scss";

import Input from "./components/input/Input";
import Output from "./components/output/Output";

function App() {
  const [name, setName] = useState("hello World");
  const [username, setUsername] = useState("Ture");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div className="App">
      <Output
        name={"Why hello there... " + username}
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend sagittis mauris, id euismod leo ornare vel. Praesent fringilla sapien nec elit pulvinar, et finibus nisl porttitor. Etiam tincidunt ipsum at tincidunt porta. "
      ></Output>
      <Output
        name={name}
        paragraph="textfield above will output what you type in the inputfield!"
      ></Output>
      <Input name={name} onChange={handleChange}></Input>
    </div>
  );
}

export default App;
