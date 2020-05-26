import React, { Component } from 'react'
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Container, Row, Col } from 'reactstrap';

export default class App extends Component {
  state = {
    currentCategory: ""
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
  }

  render() {
    let productInfo = { title: "Product List", currentCategory: this.state.currentCategory };
    let categoryInfo = { title: "Category List", currentCategory: this.state.currentCategory };

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
              <ProductList info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}