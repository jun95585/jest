import React, { Component } from 'react';
import './App.less';

import { UnControlled as CodeMirror } from 'react-codemirror2'
import { codeMirror } from 'codemirror'

import 'codemirror/mode/yaml/yaml';
import 'codemirror/mode/diff/diff';
import 'codemirror/theme/ambiance.css';
require('codemirror/lib/codemirror.css');

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      value: '// Code',
    };
  }

  changeCode (editor, data, value) {
    this.setState({
      value: value,
    })
  }
  render() {
    return (
      <div className="App">
        <CodeMirror
          ref="editor"
          options={{
            mode: 'diff',
            theme: 'ambiance',
            lineNumbers: true
          }}
          value={this.state.value}
          onChange={(editor, data, value) => this.changeCode(editor, data, value)}
        />

      </div>
    );
  }
}

export default App;
