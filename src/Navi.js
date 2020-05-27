import React, { Component } from 'react'
import Cart from './Cart'
import './Navi.css'

export default class Navi extends Component {
    
    render() {
        return (
            <div className="mb-3">
                <Cart deleteCart={this.props.deleteCart} info={this.props.info}/>
            </div>
        );
    }
}
