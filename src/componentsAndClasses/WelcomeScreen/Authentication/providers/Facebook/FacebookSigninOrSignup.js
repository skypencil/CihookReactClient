import React from 'react';

import { facebookAuthProvider } from '../../../../classes/firebase';

const FacebookButton = ({ loginWithProviderHandler }) => {
    return (
        <button
            type="button"
            onClick={() => {
                loginWithProviderHandler(facebookAuthProvider);
            }}
        >
            Sign in with Facebook
        </button>
    );
};

export default FacebookButton;
