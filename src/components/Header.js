
import React, { Component } from 'react';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        const {
            name = 'header'
        } = this.props || {}
        return (
            <section className="header-wrap">
                {name}
            </section>
        );
    }
}