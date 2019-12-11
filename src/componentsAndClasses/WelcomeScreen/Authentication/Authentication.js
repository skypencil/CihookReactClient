import React from 'react';
import {
    auth,
    googleAuthProvider,
    facebookAuthProvider,
} from '../../classes/firebase';

import EmailAndPass from './providers/EmailAndPass.js';

const Authentication = ({ error, errorHandler }) => {
    const loginWithProviderHandler = provider => {
        auth.signInWithPopup(provider)
            .then(() => {
                console.log('user logged in with', provider.providerId);
            })
            .catch(error => {
                console.log(error);
                errorHandler(error);
            });
    };

    const errorMessageHandler = error => {
        console.log('error at error message handler: ', error);
        if (
            error.hasError &&
            error.errorCode === 'auth/account-exists-with-different-credential'
        ) {
            return (
                <div>
                    <p className="font-weight-normal text-danger">
                        {error.errorMessage}
                    </p>
                    <p className="font-weight-normal text-danger">
                        {error.errorEmail}
                    </p>
                </div>
            );
        } else {
            return <div></div>;
        }
    };

    return (
        <div>
            <div className="d-flex flex-column align-items-md-center">
                <button
                    type="button"
                    onClick={() => {
                        loginWithProviderHandler(facebookAuthProvider);
                    }}
                >
                    Sign in with Facebook
                </button>
                <button
                    type="button"
                    onClick={() => {
                        loginWithProviderHandler(googleAuthProvider);
                    }}
                >
                    Sign in with Google
                </button>
            </div>
            <EmailAndPass />
            <div>
                <div>{errorMessageHandler(error)}</div>
            </div>
        </div>
    );
};

export default Authentication;
