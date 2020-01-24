import React, { useContext, useEffect } from 'react';

import { AppContext } from '../../App';

import Waiting from '../Waiting/Waiting';
import Profile from '../Profile/Profile';
import Authentication from '../Authentication/Authentication';
import SignUpForm from '../SignUpForm/SignUpForm';

import User from '../../lib/user/user';
import { auth } from '../../lib/firebase/firebase';

const Welcome = () => {
    const store = useContext(AppContext);

    const hasDataHandler = json => {
        console.log('ScreenHasDataHandler');
        let data = json;
        if (data === null) {
            return;
        } else {
            let userObject = new User(
                data.email,
                data.uid,
                data.displayName,
                data.displayName,
                data.photoURL
            );

            store.userObject.set(userObject);
            store.userLoggedIn.set(userObject.isLoggedIn());
            store.callsMade.set(store.callsMade.get + 1);
        }
    };

    const callForUser = () => {
        var user = auth.currentUser;

        if (user) {
            //if there is a user, the app will automatically publish the page. No need to do anything here.
            console.log('here');
        } else {
            store.userLoggedIn.set(false);
        }
    };

    const noDataHandler = () => {
        store.userLoggedIn.set(false);
    };

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
            return (
                <Profile
                    userObject={store.userObject.get}
                    noDataHandler={noDataHandler}
                />
            );
        } else if (store.userLoggedIn.get === false) {
            return (
                <Authentication
                    errorHandler={errorHandler}
                    error={store.error.get}
                />
            );
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
        //onAuthStateChanged is triggered if there is a change in the status of auth. callForUser is a dumb function that does that.

        callForUser();

        auth.onAuthStateChanged(userObject => {
            console.log('useEffectScreen');
            hasDataHandler(userObject);
        });
    });

    return displayScreen();
};

export default Welcome;
