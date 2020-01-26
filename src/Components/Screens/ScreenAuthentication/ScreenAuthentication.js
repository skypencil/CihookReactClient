import React, { useContext } from 'react';
import { AppContext } from '../../../App';

import ButtonFBSigninOrSignup from '../../Buttons/ButtonFBSigninOrSignup/ButtonFBSigninOrSignup';
import ButtonGoogleSigninOrSignup from '../../Buttons/ButtonGoogleSigninOrSignup/ButtonGoogleSigninOrSignup';
import CardSignInForm from '../../Cards/CardSignInForm/CardSignInForm';
import CardAuthenticationError from '../../Cards/CardAuthenticationError/CardAuthenticationError';

const Authentication = () => {
    const store = useContext(AppContext);
    const error = store.error.get;
    return (
        <div className="justify-content-center rounded border shadow-lg p-3 mb-5 bg-white rounded">
            <ButtonFBSigninOrSignup />
            <ButtonGoogleSigninOrSignup />
            <CardSignInForm />
            {error.hasError ? <CardAuthenticationError /> : <div />}
        </div>
    );
};

export default Authentication;
