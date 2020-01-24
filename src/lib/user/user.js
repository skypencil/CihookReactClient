class User {
    constructor(email, id, first_name, last_name, avatar) {
        this.email = email;
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.avatar = avatar;
    }

    callForUser = (authAPI, appState) => {
        var user = authAPI.currentUser;

        if (user) {
            //if there is a user, the app will automatically publish the page. No need to do anything here.
            console.log('here');
        } else {
            appState.userLoggedIn.set(false);
        }
    };

    isLoggedIn = () => {
        const result = this.id !== undefined;
        return result;
    };

    hasDataHandler = (userObjectFromFirebaseAuthentication, appState) => {
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
            appState.userLoggedIn.set(userObject.isLoggedIn());
            appState.callsMade.set(appState.callsMade.get + 1);
        }
    };

    noDataHandler = appState => {
        appState.userLoggedIn.set(false);
    };

    logoutHanlder = (firebaseAPI, userObject, appState) => {
        firebaseAPI
            .auth()
            .signOut()
            .then(function() {
                userObject.noDataHandler(appState);
            })
            .catch(function(error) {
                console.log(error);
            });
    };
}

export default User;
