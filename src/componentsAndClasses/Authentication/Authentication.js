import React from 'react';
import { auth } from '../../lib/firebase/firebase';

import FacebookButton from '../AuthProviders/Facebook/FacebookSigninOrSignup';
import GoogleButton from '../AuthProviders/Gmail/GoogleSigninOrSignup';

import EmailAndPass from '../AuthProviders/EmailAndPass/EmailAndPass.js';

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
        <div className="justify-content-center rounded border shadow-lg p-3 mb-5 bg-white rounded">
            <div className="d-flex flex-column align-items-md-center justify-content-center">
                <FacebookButton handler={loginWithProviderHandler} />
                <GoogleButton handler={loginWithProviderHandler} />
            </div>

            <div style={{ marginTop: 10 }}>
                <EmailAndPass />
            </div>

            <div>
                <div>{errorMessageHandler(error)}</div>
            </div>
        </div>
    );
};

export default Authentication;
