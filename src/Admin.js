import React, { Component } from 'react'
import { Form, Input, Button, FormGroup, Label } from 'reactstrap'
import alertifyjs from 'alertifyjs';

export default class Admin extends Component {
    state = {
        categoryName: "",
        productName: "",
        quantityPerUnit: "",
        unitPrice: "",
        unitsInStock: 0
    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({[name]: value});
    }

    handleSubmit = (event) => {
        alertifyjs.success( this.state.unitsInStock + " adet " + this.state.productName + " adlı ürün eklendi.", 2);
        
        console.log(event.target);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h3>Admin Paneli Ürün Ekleme</h3>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="productName">Product Name</Label>
                        <Input type="text" name="productName" onChange={this.handleChange} id="productName" placeholder="Product Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="quantityPerUnit">Quantity Per Unit</Label>
                        <Input type="text" name="quantityPerUnit" onChange={this.handleChange} id="quantityPerUnit" placeholder="Quantity Per Unit" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="unitPrice">Unit Price</Label>
                        <Input type="text" name="unitPrice" onChange={this.handleChange} id="unitPrice" placeholder="Unit Price" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="unitsInStock">Units In Stock</Label>
                        <Input type="text" name="unitsInStock" onChange={this.handleChange} id="unitsInStock" placeholder="Units In Stock" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="categoryName">Units In Stock</Label>
                        <Input type="select" name="categoryName" onChange={this.handleChange} id="categoryName">
                            <option>Beverages</option>
                            <option>Condiments</option>
                            <option>Confections</option>
                            <option>Dairy Products</option>
                            <option>Grains/Cereals</option>
                            <option>Meat/Poultry</option>
                            <option>Produce</option>
                            <option>Seafood</option>
                        </Input>
                    </FormGroup>
                    <Button type="submit" color="success">Add Product</Button>
                </Form>
            </div>
        )
    }
}
