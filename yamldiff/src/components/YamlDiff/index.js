import React, { Component } from 'react';

import yaml from 'js-yaml';
import { getUniqueKey } from '../../util/utils';
import './style.sass'
var jsdiff = require('diff');

class YamlDiff extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        const {
            originCode = '',
            newCode = '',
        } = this.props || {}
        const diffList = jsdiff.diffTrimmedLines(originCode, newCode);

        return (
            <pre className="yaml-diff">
                {diffList.map((diff, index) => {
                    let colorCls = 'text-muted'
                    let sign = '';
                    if (diff.added) {
                        colorCls = 'text-success'
                        sign = '+';
                    }

                    if (diff.removed) {
                        colorCls = 'text-danger'
                        sign = '-';
                    }
                    return (
                        <p className={colorCls}
                            key={"diff" + getUniqueKey()}>
                            <span>{sign}</span>
                            {diff.value}
                        </p>
                    )
                })}
            </pre>
        )
    }
}

export default YamlDiff;
