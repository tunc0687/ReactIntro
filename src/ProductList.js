import React, { Component } from 'react'
import { Table, Button } from 'reactstrap'

export default class ProductList extends Component {

    renderProduct() {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.products.map((product, i) => (
                            <tr key={product.id}>
                                <th scope="row">{i + 1}</th>
                                <td>{product.productName}</td>
                                <td>{product.quantityPerUnit}</td>
                                <td>{product.unitPrice}</td>
                                <td>{product.unitsInStock}</td>
                                <td><Button onClick={() => this.props.addCart(product)} color="info">Add</Button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }

    render() {
        return (
            <div>
                <h4>{this.props.info.title} - {this.props.info.currentCategory}</h4>
                {this.renderProduct()}
            </div>
        )
    }
}
