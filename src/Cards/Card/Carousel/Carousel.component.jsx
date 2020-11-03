import React, {useState} from 'react';
import './Carousel.style.css'
import CarouselButtons from "./CarouselButtons/CarouselButtons.component.jsx";

/**
 * @function Carousel
 */

const Carousel = ({pictures}) => { 
    const [x, setX] = useState(0);


    return (
        <div className="Carousel">
            {
                pictures.map((pic, i) =>{
                    return <div key={i} className="Slide" style={{transform: `translateX(${x}%)`}}>
                                <img key={i + 1} alt={""} src={pic} className="CarouselImage"/>
                           </div>
                })
            }

            <CarouselButtons x = {x} setX = {setX} numOfPictures = {pictures.length}/>
           
        </div>
    )
}

export default Carousel;