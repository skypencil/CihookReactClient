import React, { useContext, useEffect } from 'react';

import { AppContext } from '../../App';

import Waiting from './Waiting/Waiting';
import Profile from './Profile/Profile';
import Authentication from './Authentication/Authentication';
import SignUpForm from './SignUpForm/SignUpForm';

import { getUser } from '../classes/network/networkCall';
import User from '../classes/user/user';
import { hasData } from '../classes/network/dataValidation';
import { auth } from '../classes/firebase';

const Welcome = () => {
    const store = useContext(AppContext);

    const hasDataHandler = json => {
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
        // logged in
        // const url = 'https://reqres.in/api/users/2';
        // not found
        const url = 'https://reqres.in/api/users/23';

        return getUser(url).then(json => {
            if (hasData(json)) {
                hasDataHandler(json);
            } else {
                noDataHandler();
            }
        });
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
        // find a way to check for user from the get go
        callForUser();

        auth.onAuthStateChanged(userObject => {
            hasDataHandler(userObject);
        });
    }, []);

    return displayScreen();
};

export default Welcome;
