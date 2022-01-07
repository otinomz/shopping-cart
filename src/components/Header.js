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
                        style={{ width: 500 }}
                        placeholder="Search a product"
                        className="m-auto"
                    />
                </Navbar.Text>
                 <Nav>
                    <Dropdown >
                        <Dropdown.Toggle variant="success">
                            <FaShoppingCart color="white" fontSize="25px" />
                            <Badge>{0}</Badge>
                        </Dropdown.Toggle>

                        
                    </Dropdown>
                </Nav>
            </Container> 
        </Navbar>
    )
}

export default Header
