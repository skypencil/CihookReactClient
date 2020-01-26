import React, { useState, useContext } from 'react';

import { AppContext } from '../../../App';

import googleLoginIcon from '../../../staticAssets/googleLoginIcon.png';

import { googleAuthProvider } from '../../../lib/firebase/firebase';
import { loginWithProviderHandler } from '../../../lib/user/firebaseUserAuthHandlers';

const GoogleButton = () => {
    const store = useContext(AppContext);

    const [backgroundColor, setBackgroundColor] = useState('#white');

    return (
        <div
            className="rounded border border-warning d-flex justify-content-around"
            style={{
                backgroundColor: backgroundColor,
                width: '400px',
                height: '25px',
                margin: '2px',
            }}
            onMouseEnter={() => setBackgroundColor('#ffedcd')}
            onMouseOut={() => setBackgroundColor('white')}
            onClick={() => {
                loginWithProviderHandler(googleAuthProvider, store);
            }}
        >
            <div
                className="d-flex align-items-center justify-content-center"
                style={{ padding: 0, width: '100px' }}
            >
                <img
                    src={googleLoginIcon}
                    className="icon"
                    alt="login with google"
                />
            </div>

            <div style={{ padding: 0, width: '50px' }}></div>

            <div
                className="d-flex align-items-center justify-content-left"
                style={{ width: '250px', fontSize: 14, color: '#2b2b2b' }}
            >
                LOGIN WITH GOOGLE
            </div>
        </div>
    );
};

export default GoogleButton;
