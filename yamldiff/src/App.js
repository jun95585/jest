import React, { Component } from 'react';
import './App.sass';
import YamlDiff from './components/YamlDiff'
import VisiableNewCodeEditor from './container/VisiableNewCodeEditor'
import VisiableYamlDiff from './container/VisiableYamlDiff'
import VisiableOriginCodeEditor from './container/VisiableOriginCodeEditor'


class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App">
        <VisiableOriginCodeEditor />
        <VisiableNewCodeEditor />
        <VisiableYamlDiff />
      </div>
    );
  }
}

export default App;
