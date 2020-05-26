import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

export default class Navi extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }


    componentDidMount() {
        this.toggle.bind(this);
    }

    render() {
        return (
            <div className="mb-3">
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">TUNCSA</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">GitHub</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Sepetim {this.props.info.count}
                                </DropdownToggle>
                                <DropdownMenu right id="sepet">
                                    {
                                        this.props.info.carts.map((prd, i) => (
                                            <DropdownItem key={i}>
                                                {prd.productName} - {prd.unitPrice}$ ({prd.piece} Adet)
                                            </DropdownItem>
                                        ))
                                    }

                                    <DropdownItem divider />
                                    <DropdownItem>
                                        TOPLAM: {this.props.info.totalPrice}$
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
