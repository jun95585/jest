import React, { Component } from 'react';

import Editor from '../Editor'

class OriginEditor extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {
            code = '',
            onChange,
        } = this.props || {}
        return (
            <Editor
                code={code}
                onChange={(val) => { onChange && onChange(val)}}
                btns={[this.renderCopyToNew()]}
            />
        );
    }

    renderCopyToNew () {
        const {
            code = '',
            copyToNew,
        } = this.props || {}
        return (
            <a
                className='btn'
                onClick={(e) => {
                    copyToNew && copyToNew(code)
                    e.stopPropagation()
                }}
            >
                copy to new
            </a>
        )
    }

}

export default OriginEditor;
