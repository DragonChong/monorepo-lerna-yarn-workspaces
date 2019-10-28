import React, { Component } from "react";
import logo from "./logo.svg";
// import Input from "@dragonchong/test-lerna-input";
import Button from "@dragonchong/test-lerna-button";

import "./App.css";

class App extends Component {
      render() {
            return (
                  <div className="App">
                        <header className="App-header">
                              <img src={logo} className="App-logo" alt="logo" />
                              <h1 className="App-title">Welcome to React</h1>
                        </header>
                        {/* <Input placeholder="Hi~Bye World!" /> */}
                        <Button>Click Me!</Button>
                  </div>
            );
      }
}

export default App;
