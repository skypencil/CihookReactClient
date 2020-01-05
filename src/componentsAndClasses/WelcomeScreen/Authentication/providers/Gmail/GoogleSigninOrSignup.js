import React from 'react';

import { googleAuthProvider } from '../../../../classes/firebase';

const GoogleButton = ({ loginWithProviderHandler }) => {
    return (
        <button
            type="button"
            onClick={() => {
                loginWithProviderHandler(googleAuthProvider);
            }}
        >
            Sign in with Google
        </button>
    );
};

export default GoogleButton;
