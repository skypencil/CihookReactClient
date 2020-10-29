import React from 'react';
import Carousel from './Carousel/Carousel.component.jsx';
import InteractionBar from './InteractionBar/InteractionBar.component.jsx';
import OfferLine from './OfferLine/OfferLine.component.jsx';
import Description from './Description/Description.component.jsx'
import Footer from "./Footer/Footer.component.jsx";
import './Card.style.css';

const Card = ({data}) => { 
    return(
        <div className="Card">
            <div className="CarouselContainer">
                <Carousel pictures = {data[0].pictures}/>
                <OfferLine />
                <Description />
                <InteractionBar />
                <Footer/>
            </div>
        </div>
    )
}

export default Card;