import React, { Component } from 'react';

import { UnControlled as CodeMirror } from 'react-codemirror2'

import 'codemirror/mode/yaml/yaml';
import 'codemirror/theme/ambiance.css';
import 'codemirror/lib/codemirror.css';
import './style.sass';
class Editor extends Component {
    constructor(props) {
        super(props)

    }

    changeCode(value) {
        const {
            onChange,
        } = this.props || {};

        onChange && onChange(value)
    }

    clearCode (e) {
        this.changeCode('')
        e.stopPropagation();
    }

    render() {
        return (
            <section className="editor">
                <title>{123}</title>
                <CodeMirror
                    className="editor-codemirror"
                    ref="editor"
                    editorDidMount={(editor) => {
                        editor.refresh();
                    }}
                    options={{
                        mode: 'diff',
                        theme: 'ambiance',
                        lineNumbers: true,
                        autoRefresh: true
                    }}
                    value={this.props.code}
                    onChange={(editor, data, value) => this.changeCode(value)}
            />
                {this.renderBtns()}
            </section>
        );
    }

    renderBtns() {
        const {
            btns = []
        } = this.props || {}

        return (
            <section className = "editor-btns">
                {btns.map((btn) => {
                    return btn
                })}
                <a className='btn' onClick={(e) => this.clearCode(e)}>clear</a>
            </section>
        )
    }
}

export default Editor;
