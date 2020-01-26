import React, { useContext, useEffect } from 'react';

import { AppContext } from '../../App';

import CardProfile from '../CardProfile/CardProfile';
import ScreenWaiting from '../ScreenWaiting/ScreenWaiting';
import ScreenAuthentication from '../ScreenAuthentication/ScreenAuthentication';
import ScreenSignUpForm from '../ScreenSignUpForm/SignUpForm';

import {
    callForUser,
    hasDataHandler,
} from '../../lib/user/firebaseUserAuthHandlers';
import { auth } from '../../lib/firebase/firebase';

const Canvas = () => {
    const store = useContext(AppContext);

    const displayScreen = () => {
        if (store.userLoggedIn.get === null) {
            return <ScreenWaiting />;
        } else if (store.userLoggedIn.get === true) {
            return <CardProfile />;
        } else if (store.userLoggedIn.get === false) {
            return <ScreenAuthentication />;
        } else if (store.userLoggedIn.get === 'wantsEmailPassSignup') {
            return <ScreenSignUpForm />;
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
