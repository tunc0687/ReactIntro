import React, { Component } from 'react'

export default class FormDemo extends Component {
    state = { username: "" }
    onChangeHandler = (event) => {
        this.setState({ username: event.target.value })
    }
    render() {
        return (
            <div>
                <form>
                    <input onChange={this.onChangeHandler} className="form-control" type="text"></input>
                    <h3>{this.state.username}</h3>
                </form>
            </div>
        )
    }
}
