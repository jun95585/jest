
import React, { Component } from 'react';

export default class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        const {
            name = 'list'
        } = this.props || {}
        return (
            <section className="list-wrap">
                {name}
                {this.renderList()}
                {this.renderBtn()}
            </section>
        );
    }

    renderList () {
        const {
            list = []
        } = this.props || {}

        const List = list.map((item, i) => this.renderItem(item))

        return (
            <ul>
                {List}
            </ul>
        ) 
    }

    renderItem (item) {
        return (
            <li key = {item.id}>
                {item.title}
            </li>
        )

    }

    renderBtn () {
        const {
            listBtnClick = () => {}
        } = this.props || {}

        return (
            <btn onClick={(e) => {
                listBtnClick && listBtnClick()
            }}>
                嘿嘿嘿
            </btn>
        )
    }
}