import React, { Component } from 'react'
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Container, Row, Col } from 'reactstrap';

export default class App extends Component {
  state = {
    products: [],
    selectCategory: "",
    carts: [],
    totalCart: 0,
    count: 0
  }

  componentDidMount() {
    this.getProducts()
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

    console.log(this.state.carts);
  }


  render() {
    let productInfo = { title: "Product List", currentCategory: this.state.selectCategory };
    let categoryInfo = { title: "Category List", currentCategory: this.state.selectCategory };
    let cartInfo = { totalPrice: this.state.totalCart, carts: this.state.carts, count: this.state.count };

    return (
      <div>
        <Container>
          <Navi info={cartInfo} />
          <Row>
            <Col xs="3">
              <CategoryList changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductList addCart={this.addToCart} products={this.state.products} info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}