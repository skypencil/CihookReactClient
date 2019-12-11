import React from 'react';

import Waiting from './Waiting/Waiting';
import Profile from './Profile/Profile';
import Authentication from './Authentication/Authentication';

import { getUser } from '../classes/network/networkCall';
import User from '../classes/user/user';
import { hasData } from '../classes/network/dataValidation';
import { auth } from '../classes/firebase';

class Welcome extends React.Component {
    constructor() {
        super();
        this.state = {
            userObject: null,
            userLoggedIn: null,
            callsMade: 0,
            error: {
                hasError: null,
                errorCode: null,
                errorMessage: null,
            },
        };
    }

    callForUser = () => {
        // logged in
        // const url = 'https://reqres.in/api/users/2';
        // not found
        const url = 'https://reqres.in/api/users/23';

        return getUser(url).then(json => {
            if (hasData(json)) {
                this.hasDataHandler(json);
            } else {
                this.noDataHandler();
            }
        });
    };

    hasDataHandler = json => {
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

            this.setState({
                userObject: userObject,
                userLoggedIn: userObject.isLoggedIn(),
                callsMade: this.state.callsMade + 1,
            });
        }
    };

    noDataHandler = () => {
        this.setState({ userLoggedIn: false });
    };

    errorHandler = error => {
        console.log(error.code);
        if (error.code === 'auth/account-exists-with-different-credential') {
            this.setState({
                error: {
                    hasError: true,
                    errorCode: error.code,
                    errorMessage: error.message,
                    errorEmail: error.email,
                },
            });
        }
    };

    componentDidMount() {
        this.callForUser();
        auth.onAuthStateChanged(userObject => {
            this.hasDataHandler(userObject);
        });
    }

    displayScreen = () => {
        if (this.state.userLoggedIn === null) {
            return <Waiting />;
        } else if (this.state.userLoggedIn === true) {
            return (
                <Profile
                    userObject={this.state.userObject}
                    noDataHandler={this.noDataHandler}
                />
            );
        } else if (this.state.userLoggedIn === false) {
            return (
                <Authentication
                    userHasAnotherAccount={this.state.userHasAnotherAccount}
                    errorHandler={this.errorHandler}
                    error={this.state.error}
                />
            );
        }
    };

    render() {
        return this.displayScreen();
    }
}

export default Welcome;
