import React from 'react';
import Carousel from './Carousel/Carousel.component.jsx'
import './Card.style.css';

const Card = ({data}) => { 
    return(
        <div className="Card">
            <div className="CarouselContainer">
                <Carousel pictures = {data[0].pictures}/>
            </div>
            some text
        </div>
    )
}

export default Card;