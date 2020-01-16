import React, { useState } from 'react';

import facebookLoginIcon from '../../../../staticAssets/facebookLoginIcon.png';

import { facebookAuthProvider } from '../../../classes/firebase';

const FacebookButton = ({ handler }) => {
    const [backgroundColor, setBackgroundColor] = useState('#white');

    return (
        <div
            className="rounded border border-primary d-flex justify-content-center"
            style={{
                backgroundColor: backgroundColor,
                width: '400px',
                height: '25px',
                margin: '2px',
            }}
            onMouseEnter={() => setBackgroundColor('#dfe3ee')}
            onMouseOut={() => setBackgroundColor('white')}
            onClick={() => {
                handler(facebookAuthProvider);
            }}
        >
            <div
                className="d-flex align-items-center justify-content-center"
                style={{ padding: 0, width: '100px' }}
            >
                <img
                    src={facebookLoginIcon}
                    className="icon"
                    alt="login with facebook"
                />
            </div>

            <div style={{ padding: 0, width: '50px' }}></div>

            <div
                className="d-flex align-items-center justify-content-left"
                style={{ width: '250px', fontSize: 14, color: '#2b2b2b' }}
            >
                LOGIN WITH FACEBOOK
            </div>
        </div>
    );
};

export default FacebookButton;
