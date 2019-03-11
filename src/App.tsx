import React, { Component } from 'react';
import './App.css';
import InputNumber from "./component/input/inputNumber";

class App extends Component {
  render() {
    return (
      <div className="App">
        只能输入数字的输入框：<InputNumber />
      </div>
    );
  }
}

export default App;
