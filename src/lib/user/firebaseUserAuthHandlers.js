import User from './localUserObjectHandlers';

export const callForUser = (authAPI, appState) => {
    var user = authAPI.currentUser;

    if (user) {
        //if there is a user, the app will automatically publish the page. No need to do anything here.
        console.log('here');
    } else {
        appState.userLoggedIn.set(false);
    }
};

export const isLoggedIn = appState => {
    const result =
        appState.userLoggedIn.get !== undefined &&
        appState.userLoggedIn.get !== null;
    return result;
};

export const hasDataHandler = (
    userObjectFromFirebaseAuthentication,
    appState
) => {
    console.log('ScreenHasDataHandler');
    if (userObjectFromFirebaseAuthentication === null) {
        return;
    } else {
        let userObject = new User(
            userObjectFromFirebaseAuthentication.email,
            userObjectFromFirebaseAuthentication.uid,
            userObjectFromFirebaseAuthentication.displayName,
            userObjectFromFirebaseAuthentication.displayName,
            userObjectFromFirebaseAuthentication.photoURL
        );

        appState.userObject.set(userObject);
        appState.userLoggedIn.set(userObject.uid !== null);
        appState.callsMade.set(appState.callsMade.get + 1);
    }
};

export const noDataHandler = appState => {
    appState.userLoggedIn.set(false);
};

export const logoutHanlder = (firebaseAPI, appState) => {
    firebaseAPI
        .auth()
        .signOut()
        .then(function() {
            noDataHandler(appState);
        })
        .catch(function(error) {
            console.log(error);
        });
};

export const errorHandler = (error, appState) => {
    if (error.code === 'auth/account-exists-with-different-credential') {
        appState.error.set({
            errorType: 'duplicate credential',
            hasError: true,
            errorCode: error.code,
            errorMessage: error.message,
            errorEmail: error.email,
        });
    }
};
