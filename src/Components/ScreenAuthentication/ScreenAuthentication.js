import React, { useContext } from 'react';

import { AppContext } from '../../App';

import { auth } from '../../lib/firebase/firebase';

import { errorHandler } from '../../lib/user/firebaseUserAuthHandlers';

import CardAuthenticationError from '../CardAuthenticationError/CardAuthenticationError';

import ButtonFBSigninOrSignup from '../Buttons/ButtonFBSigninOrSignup/ButtonFBSigninOrSignup';
import GoogleButton from '../Buttons/ButtonGoogleSigninOrSignup/ButtonGoogleSigninOrSignup';
import CardSignInForm from '../CardSignInForm/CardSignInForm';

const Authentication = () => {
    const store = useContext(AppContext);
    const error = store.error.get;
    const loginWithProviderHandler = provider => {
        auth.signInWithPopup(provider)
            .then(() => {
                console.log('user logged in with', provider.providerId);
            })
            .catch(error => {
                console.log(error);
                errorHandler(error, store);
            });
    };

    return (
        <div className="justify-content-center rounded border shadow-lg p-3 mb-5 bg-white rounded">
            <ButtonFBSigninOrSignup />
            <GoogleButton handler={loginWithProviderHandler} />
            <CardSignInForm />
            {error.hasError ? <CardAuthenticationError /> : <div />}
        </div>
    );
};

export default Authentication;
