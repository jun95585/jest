import React, { Component } from 'react';
import './App.css';

import { UnControlled as CodeMirror } from 'react-codemirror2'

import 'codemirror/mode/yaml/yaml';
import 'codemirror/theme/ambiance.css';
require('codemirror/lib/codemirror.css');

class Editor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '// Code',
        };
    }

    changeCode(value) {
        this.setState({
            value: value,
        }, () => {
            const {
                onChange,
            } = this.props || {};

            onChange && onChange(value)
        })
    }

    clearCode (e) {
        this.changeCode('')
        e.stopPropagation();
    }

    render() {
        return (
            <section className="editor">
                <CodeMirror
                    ref="editor"
                    options={{
                        mode: 'diff',
                        theme: 'ambiance',
                        lineNumbers: true
                    }}
                    value={this.state.value}
                    onChange={(value) => this.changeCode(value)}
                />
                {this.renderBtns()}
            </section>
        );
    }

    renderBtns() {
        const {
            btns = []
        } = this.props || {}

        render (
            <section className = "editor-btns">
                {btns.map((btn) => {
                    return btn
                })}
                <a onClick={(e) => this.clearCode(e)}>clear</a>
            </section>
        )
    }
}

export default Editor;
