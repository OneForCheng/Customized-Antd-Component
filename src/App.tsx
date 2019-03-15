import React, { Component } from 'react';
import './App.css';
import InputNumber from "./component/input/inputNumber";
import SelectEmail from "./component/select/autoCompleteSuffixSelect";
import 'antd/dist/antd.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        只能输入数字的输入框：<InputNumber />
        邮箱后缀自动补齐：<SelectEmail style={{ width: 200 }} suffixes={['@qq.com', '@baidu.com', '@tw.com', '@me.com']}/>
      </div>
    );
  }
}

export default App;
