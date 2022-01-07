import {createContext, useEffect} from "react"
import faker from "faker"

const Cart = createContext()

const Context = ({ children }) => {
    
    // using faker package installed in the dependencies
    // to generate data
    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image(),
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
    }));
    console.log(products)
    
    return (
        <Cart.Provider value={products}>
            {children}
        </Cart.Provider>
    )
}

export default Context
