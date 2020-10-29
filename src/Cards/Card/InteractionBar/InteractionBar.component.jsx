import React, {useState} from 'react';
import './InteractionBar.style.css';

import Heart from "./Graphics/SVG/Heart.svg";
import HeartHover from "./Graphics/SVG/HeartHover.svg";
import HeartClicked from "./Graphics/SVG/HeartClicked.svg";

import Comment from "./Graphics/SVG/Comment.svg";
import CommentHover from "./Graphics/SVG/CommentHover.svg";


const InteractionBar = () => {
    const [clickStatus, setClickStatus] = useState(false);

    return (
        <div className="InteractionBar">
            <div className="ActionsContainer">
                <div id="actionsOnLeft">
                    { clickStatus ?
                    <img 
                        src={HeartClicked} 
                        alt="Like" 
                        className="InteractionIcons"
                        onClick = {() => setClickStatus(!clickStatus) }
                    />
                    :
                    <img 
                        src={Heart} 
                        alt="Like" 
                        className="InteractionIcons"
                        onMouseOver={e => e.currentTarget.src = HeartHover}
                        onMouseLeave={e => e.currentTarget.src = Heart}
                        onClick = {() => setClickStatus(!clickStatus) }
                    />
                    }

                    {
                    <img 
                        src={Comment} 
                        alt="Like" 
                        className="InteractionIcons"
                        onMouseOver={e => e.currentTarget.src = CommentHover}
                        onMouseLeave={e => e.currentTarget.src = Comment}
                    />
                    }
                    
                </div>
                
                <div id="actionsOnRight">
                   <p id="heartCount">12,000,000 hearts.</p>
                </div>
            </div>
            <hr id="horizontalRule"/>
        </div>
    );
}

export default InteractionBar;