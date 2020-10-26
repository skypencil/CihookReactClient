import React from 'react';
import Carousel from './Carousel/Carousel.component.jsx'
import './Card.style.css';

const Card = (props) => { 
    return(
        <div className="Card">
            <div className="CarouselContainer">
                <Carousel/>
            </div>
            some text
        </div>
    )
}

export default Card;