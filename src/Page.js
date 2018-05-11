
import React, { Component } from 'react';

import Header from "./components/Header";
import List from "./components/List";

import config from './config.js';

export default class Page extends Component {
    constructor(props) {
        super(props);

        this.config = config
        this.state = {
        }
    }

    render() {
        return (
            <section className="page-wrap">
                {this.renderHeader()}
                {this.renderList()}
            </section>
        );
    }

    renderHeader () {
        const headerProps = this.config.header
        return (
            <Header {...headerProps}/>
        )
    }

    renderList () {
        const listProps = this.config.list
        return (
            <List listBtnClick = {this.listBtnClick.bind(this)} {...listProps}/>
        )
    }

    listBtnClick () {
        return alert('heiheihei')
    }
}