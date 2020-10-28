import React from 'react';
import './CarouselButtons.style.css';

const CarouselButtons = ({x,setX, numOfPictures}) => {

    const goLeft = () => {
        x === 0 ? setX(-100 * (numOfPictures - 1)) : setX(x + 100);
    }

    const goRight = () => {
        x === -100 * (numOfPictures - 1) ? setX(0) : setX(x - 100);
    }

    return(
        <div className="CarouselBtnContainer">
                    <img id="goLeft" src={require("./graphics/0.5x/BackBtn.png")} onClick={goLeft}/>
                    <img id= "goRight" src={require("./graphics/0.5x/ForwardBtn.png")} onClick={goRight}/>
        </div>
    )
}

export default CarouselButtons;