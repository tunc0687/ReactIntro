import React, { Component } from 'react'
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Container, Row, Col } from 'reactstrap';

export default class App extends Component {
  state = {
    products: [],
    selectCategory: ""
  }

  componentDidMount(){
    this.getProducts(null);
  }

  getProducts = (id) => {
    let url;
    if (id == null) {
      url = "http://localhost:3000/products";
    } else {
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

  render() {
    let productInfo = { title: "Product List", currentCategory: this.state.selectCategory };
    let categoryInfo = { title: "Category List" };

    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductList products= {this.state.products} info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}