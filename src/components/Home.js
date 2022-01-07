import React from 'react'
import { CartState } from '../context/Context'

const Home = () => {

    const { state } = CartState()
    
    console.log(state)

    return (
        <div>
            home page
        </div>
    )
}

export default Home
