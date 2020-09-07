import React, { useState, ChangeEvent } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Page1 from "./pages/page1/Page1";
import Page2 from "./pages/page2/Page2";
import Input from "./components/input/Input";
import Output from "./components/output/Output";
// import { createBrowserHistory } from "history";

// const history = createBrowserHistory();

function App() {
  const [name, setName] = useState("hello World");
  const [username, setUsername] = useState("Ture");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
        </Switch>
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
    </Router>
  );
}

export default App;
