import React, { Component } from 'react'
import {Table} from 'reactstrap'

export default class ProductList extends Component {

    render() {
        return (
            <div>
                <h4>{this.props.info.title} - {this.props.info.currentCategory}</h4>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}
