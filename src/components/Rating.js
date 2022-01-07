import React from 'react'
import {AiFillStar, AiOutlineStar} from "react-icons/ai"

const Rating = ({rating, onClick, style}) => {
    return (
        <>
            {/* since we dont want anythinng from the array,
            we are going to drop an underscore and take the index
            simply writing an algorith. when you map through the empty array,
            if the rating passes as props is greater than the current index, drop a fillStar icon
            else if it isnt greater than the index, drop an airOutlineStar icon */}
            {[...Array(5)].map((_, index) => (
                <span>
                    {rating > index ? (
                       <AiFillStar fontSize="15px"/> 
                    ) : (
                        <AiOutlineStar fo ntSize="15px"/>
                    )}
                </span>
           ))} 
        </>
    )
}

export default Rating
 