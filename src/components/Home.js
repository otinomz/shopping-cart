import React from 'react'
import { CartState } from '../context/Context'

const Home = () => {
    const {
        state: { products },
    } = CartState()
    
    console.log(products)
 
    return (
        <div className="home">
            {/* filters */}
            <div className="productContainer">
                {
                    products.map((product) => {
                       return <span key={product.id}>{product.name}</span>
                    })
                }
            </div>

        </div>
    )
}

export default Home
