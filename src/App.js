import React, { Component } from "react";
import "./App.css";
import Keypad from "./components/Keypad";
import ReportPanel from "./components/Reports/ReportPanel";

class App extends Component {
  state = {
    keyboardActive: false
  };

  activateKeyboard = () => {
    this.setState({
      keyboardActive: true
    });
  };

  deactivateKeyboard = e => {
    if (
      (e.target.nodeName !== "BUTTON" &&
        e.target.className.indexOf("display") === -1 &&
        e.target.className.indexOf("expression") === -1) ||
      (e.target.nodeName === "BUTTON" && e.type === "mousedown")
    ) {
      this.setState({
        keyboardActive: false
      });
    }
  };

  render = () => {
    return (
      <div className="App" onClick={this.deactivateKeyboard}>
        <Keypad
          deactivateKeyboard={this.deactivateKeyboard}
          activateKeyboard={this.activateKeyboard}
          keyboardActive={this.state.keyboardActive}
        />
        <ReportPanel />
      </div>
    );
  };
}

export default App;
