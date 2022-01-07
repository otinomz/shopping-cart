import React from 'react'
import {
    Navbar,
    Container,
    FormControl,
    Nav,
    Badge,
    Dropdown
} from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" style={{height: 80}}>
            <Container>
                <Navbar.Brand>
                    <Link to="/">Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className="search">
                    <FormControl
                        placeholder="Search a product"
                        className="m-auto"
                    />
                </Navbar.Text>
                 <Nav>
                     <Dropdown className="d-inline mx-2 dropleft">
                        <Dropdown.Toggle id="dropdown-autoclose-true" variant="success">
                            <FaShoppingCart color="white" fontSize="25px" />
                            <Badge>{0}</Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Cart is Empty</Dropdown.Item>   
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
