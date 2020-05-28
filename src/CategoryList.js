import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class CategoryList extends Component {
    state = {
        categories: []
    }

    componentDidMount() {
        this.getCategories();
    }

    getCategories = () => {
        fetch("http://localhost:3000/categories")
            .then(response => response.json())
            .then(data => this.setState({ categories: data }))
    }

    render() {
        return (
            <div>
                <h4>{this.props.info.title}</h4>
                <Link style={{textDecoration:"none"}} to="/">
                    <ListGroup>
                        {
                            this.state.categories.map(category => (
                                <ListGroupItem
                                active={category.categoryName === this.props.info.currentCategory} 
                                onClick={() => this.props.changeCategory(category)}
                                key={category.id}>

                                    {category.categoryName}
                                    
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Link>
            </div>
        )
    }
}
