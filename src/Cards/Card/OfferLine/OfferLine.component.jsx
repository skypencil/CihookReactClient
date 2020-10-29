import React, {useState} from 'react';
import './OfferLine.style.css';
import Save from "./Graphics/Save.svg";
import SaveHover from "./Graphics/SaveHover.svg";
import SaveClicked from "./Graphics/SaveClicked.svg";

const OfferLine = () => {
    const [clickStatus, setClickStatus] = useState(false);
    return (
        <div className="OfferLineBar">
            <div className="OfferLineItemsContainer">
            
                <div id="offerLineTextContainer">
                    <p id="offerLineText">Get something and then something a free.</p>
                </div>

                <div>
                    {clickStatus ?
                        <img 
                        src={SaveClicked} 
                        alt="Like" 
                        id="saveButton"
                        onClick = {() => setClickStatus(!clickStatus)}
                        className="InteractionIcons" />
                        :
                        <img 
                        src={Save} 
                        alt="Like" 
                        id="saveButton"
                        onMouseOver = {e => e.currentTarget.src = SaveHover}
                        onMouseOut = {e => e.currentTarget.src = Save}
                        onClick = {() => setClickStatus(!clickStatus)}
                        className="InteractionIcons" />
                    }
                    
                </div>
            </div>
            <hr id="horizontalRule"/>
        </div>
    )
}

export default OfferLine;