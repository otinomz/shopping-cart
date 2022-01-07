import React from 'react'
import { Card } from 'react-bootstrap'

const SingleProduct = ({product}) => {
    return (
        <div className="product">
            <Card>
                <Card.Img variant="top" src={product.img} alt={product.name }/>
            </Card>
        </div>
    )
}

export default SingleProduct
