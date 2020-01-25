import React, { useContext, useEffect } from 'react';

import { AppContext } from '../../App';

import Waiting from '../Waiting/Waiting';
import Profile from '../ScreenProfile/Profile';
import ScreenAuthentication from '../ScreenAuthentication/ScreenAuthentication';
import SignUpForm from '../ScreenSignUpForm/SignUpForm';

import {
    callForUser,
    hasDataHandler,
    errorHandler,
} from '../../lib/user/firebaseUserAuthHandlers';
import { auth } from '../../lib/firebase/firebase';

const Canvas = () => {
    const store = useContext(AppContext);

    const errorHandler = error => {
        if (error.code === 'auth/account-exists-with-different-credential') {
            store.error.set({
                hasError: true,
                errorCode: error.code,
                errorMessage: error.message,
                errorEmail: error.email,
            });
        }
    };

    const displayScreen = () => {
        if (store.userLoggedIn.get === null) {
            return <Waiting />;
        } else if (store.userLoggedIn.get === true) {
            return <Profile userObjectFromState={store.userObject.get} />;
        } else if (store.userLoggedIn.get === false) {
            return <ScreenAuthentication />;
        } else if (store.userLoggedIn.get === 'wantsEmailPassSignup') {
            return (
                <SignUpForm
                    errorHandler={errorHandler}
                    error={store.error.get}
                />
            );
        }
    };

    useEffect(() => {
        //onAuthStateChanged is triggered if there is a change in the status of auth. But, there is no such method provided by firebase SDK that allows us to check whether a user is logged in or not. so the only way to get this app going is to trigger a state change so that auth.onStateChanged() kicks in. newUser.callForUser(auth, store) is just a dumb function that only triggers a state change.

        callForUser(auth, store);

        auth.onAuthStateChanged(userObject => {
            console.log('useEffectScreen');
            hasDataHandler(userObject, store);
        });
    }, []);

    return displayScreen();
};

export default Canvas;
