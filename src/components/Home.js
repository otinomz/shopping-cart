import React from 'react'
import { CartState } from '../context/Context'
import SingleProduct from './SingleProduct'
import Filters from "./Filters"
import './style.css'

const Home = () => {
    const {
        state: { products },
    } = CartState()
    
    console.log(products)
 
    return (
        <div className="home">
            {/* filters component to be added for
                filtering the item
            */}
            <Filters/>
            <div className="productContainer">
                {
                    products.map((product) => {
                        return <SingleProduct product={product} key={ product.id}/>
                    })
                }
            </div>

        </div>
    )
}

export default Home
