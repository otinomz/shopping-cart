import React from 'react'
import {AiFillStar, AiOutlineStar} from "react-icons/ai"

const Rating = ({rating, onClick, style}) => {
    return (
        <>
            {/* since we dont want anythinng from the array,
            we are going to drop an underscore and take the index */}
            {[...Array(5)].map((_, index) => (
                <span>
                    {rating > index ? (
                       <AiFillStar fontSize="15px"/> 
                    ) : (
                        <AiOutlineStar fontSize="15px"/>
                    )}
                </span>
           ))} 
        </>
    )
}

export default Rating
 