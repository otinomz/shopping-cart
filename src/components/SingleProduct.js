import React from 'react'
import { Card } from 'react-bootstrap'

const SingleProduct = ({product}) => {
    return (
        <div className="product">
            <Card>
                <Card.Img/>
            </Card>
        </div>
    )
}

export default SingleProduct
