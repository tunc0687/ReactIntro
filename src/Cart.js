import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navi.css'

export default class Cart extends Component {

    showBag = () => {
        if (document.querySelector("#card-bag").style.display === "none") {
            document.querySelector("#card-bag").style.display = "block";
        } else {
            document.querySelector("#card-bag").style.display = "none";
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand mr-5" to="/">TUNCSA</Link>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/Admin">Admin Paneli</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/formdemo">Form Demo</Link>
                        </li>
                    </ul>
                    <div id="bag" onClick={this.showBag} className="text-center p-2 bg-white border rounded">
                        <div id="count" className="rounded-circle bg-warning">{this.props.info.count}</div>
                        <div className="h5 ml-2"> Sepet</div>
                    </div>
                    <div id="card-bag" className="card">
                        <div id="orders" className="card-body">
                            {
                                this.props.info.carts.map((prd, i) => (
                                    <div className="row" key={i}>
                                        <button onClick={() => this.props.deleteCart(prd)} className="col-1 p-1 close">x</button>
                                        <div className="col-8 p-1">{prd.productName}</div>
                                        <div className="col-3 p-1">
                                            <strong>{prd.unitPrice} TL</strong><br />
                                            {prd.piece} Adet
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col-8">TOPLAM TUTAR</div>
                                <div className="col-4"><strong><span id="total">{this.props.info.totalPrice}</span> TL</strong></div>
                                <div className="col-12 mt-4">
                                    <Link to="/cart" className="btn btn-warning form-control">SEPETE GİT</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
        )
    }
}
