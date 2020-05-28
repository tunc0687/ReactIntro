import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class CartList extends Component {
    renderCarts() {
        return (
            <div>
                <div className="row">
                    <div className="col-8">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product Name</th>
                                    <th>Piece</th>
                                    <th>TotalPrice</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.info.carts.map((product, i) => (
                                        <tr key={product.id}>
                                            <th scope="row">{i + 1}</th>
                                            <td>{product.productName}</td>
                                            <td>{product.piece} Adet</td>
                                            <td>{product.unitPrice * product.piece} TL</td>
                                            <td><Button onClick={() => this.props.deleteCart(product)} color="danger">Delete</Button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title text-center">
                                    SİPARİŞ ÖZETİ
                                </h5>
                                <div> {this.props.info.carts.length} Ürün</div>
                            </div>
                            <div className="card-body">
                                <p>KDV Dahil Toplam Tutar</p>
                                <p className="text-right"> <strong> {this.props.info.totalPrice} TL </strong> </p>
                            </div>
                            <div className="card-footer">
                                <Link to="/cart" className="btn btn-warning form-control">ÖDEMEYE GEÇ</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderCarts()}
            </div>
        )
    }
}
