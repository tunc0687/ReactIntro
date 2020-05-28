import React, { Component } from 'react'
import Navi from './Navi'
import CategoryList from './CategoryList'
import ProductList from './ProductList'
import { Container, Row, Col } from 'reactstrap'
import alertifyjs from 'alertifyjs'
import { Switch, Route } from 'react-router-dom'
import CartList from './CartList'
import NotFound from './NotFound'
import FormDemo from './FormDemo'


export default class App extends Component {
  state = {
    products: [],
    selectCategory: "",
    carts: [],
    totalCart: 0,
    count: 0
  }

  componentDidMount() {
    this.getProducts();
    document.querySelector("#card-bag").style.display = "none";
  }


  getProducts = (id) => {
    let url = "http://localhost:3000/products";
    if (id) {
      url = `http://localhost:3000/products?categoryId=${id}`;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
  }

  changeCategory = (category) => {
    this.setState({ selectCategory: category.categoryName })
    this.getProducts(category.id)
  }

  addToCart = (product) => {
    let prd = this.state.carts.find(prd => prd.id === product.id);
    if (prd != null) {
      prd.piece += 1;
    } else {
      product.piece = 1;
      this.state.carts.push(product);
    }

    let total = this.state.totalCart + parseFloat(product.unitPrice);
    this.setState({ totalCart: total });

    this.setState({ count: this.state.count + 1 });
    alertifyjs.success(product.productName + " add to carts", 2);
  }

  deleteCart = (product) => {
    let newCarts = this.state.carts.filter(prd => prd.id !== product.id);
    this.setState({ carts: newCarts });

    let total = this.state.totalCart - parseFloat(product.unitPrice * product.piece);
    this.setState({ totalCart: total });

    this.setState({ count: this.state.count - product.piece });
    alertifyjs.error(product.productName + " removed from carts", 2);
  }


  render() {
    let productInfo = { title: "Product List", currentCategory: this.state.selectCategory };
    let categoryInfo = { title: "Category List", currentCategory: this.state.selectCategory };
    let cartInfo = { totalPrice: this.state.totalCart, carts: this.state.carts, count: this.state.count };

    return (
      <div>
        <Navi deleteCart={this.deleteCart} info={cartInfo} />
        <Container>
          <Row>
            <Col xs="3">
              <CategoryList changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="9">
              <Switch>
                <Route exact path="/">
                  <ProductList addCart={this.addToCart} products={this.state.products} info={productInfo} />
                </Route>
                <Route path="/cart"> <CartList deleteCart={this.deleteCart} info={cartInfo} /> </Route>
                <Route path="/formdemo"> <FormDemo/> </Route>
                <Route> <NotFound/> </Route>
              </Switch>

            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}