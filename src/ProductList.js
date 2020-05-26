import React, { Component } from 'react'
import { Table } from 'reactstrap'

export default class ProductList extends Component {

    render() {
        return (
            <div>
                <h4>{this.props.info.title} - {this.props.info.currentCategory}</h4>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map((product,i) => (
                                <tr key={product.id}>
                                    <th scope="row">{i+1}</th>
                                    <td>{product.productName}</td>
                                    <td>{product.quantityPerUnit}</td>
                                    <td>{product.unitPrice}</td>
                                    <td>{product.unitsInStock}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}
