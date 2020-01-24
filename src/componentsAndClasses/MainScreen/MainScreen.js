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
    const newUser = new User({});

    // const noDataHandler = () => {
    //     store.userLoggedIn.set(false);
    // };

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
                    userObjectFromState={store.userObject.get}
                    newUser={newUser}
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

        newUser.callForUser(auth, store);

        auth.onAuthStateChanged(userObject => {
            console.log('useEffectScreen');
            console.log(newUser);
            newUser.hasDataHandler(userObject, store);
        });
    }, []);

    return displayScreen();
};

export default Welcome;
