import React, {useState} from 'react';
import './Carousel.style.css'

/**
 * @function Carousel
 */

const Carousel = ({pictures}) => { 
    const [x, setX] = useState(0);

    const goLeft = () => {
        x === 0 ? setX(-100 * (pictures.length - 1)) : setX(x + 100);
    }

    const goRight = () => {
        x === -100 * (pictures.length -1) ? setX(0) : setX(x - 100);
    }

    return (
        <div className="Carousel">
            {
                pictures.map((pic, i) =>{
                    return <div key={i} className="Slide" style={{transform: `translateX(${x}%)`}}>
                                <img key={i + 1} alt={""} src={pic} className="CarouselImage"/>
                           </div>
                })
            }

            <div className="CarouselBtnContainer">
                <img id="goLeft" src={require("./graphics/0.5x/BackBtn.png")} onClick={goLeft}/>
                <img id= "goRight" src={require("./graphics/0.5x/ForwardBtn.png")} onClick={goRight}/>
            </div>
            
        </div>
    )
}

export default Carousel;