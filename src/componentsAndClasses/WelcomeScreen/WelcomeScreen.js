import React from "react";

import Waiting from "./Waiting/Waiting"
import Profile from "./Profile/Profile";
import Authentication from "./Authentication/Authentication";

import {getUser} from "../classes/network/networkCall";
import User from "../classes/user/user"
import {hasData} from "../classes/network/dataValidation"

class Welcome extends React.Component {
    constructor() {
        super()
        this.state = {
            userObject: null,
            userLoggedIn: null,
            callsMade: 0,
        }
    }

    callForUser = () => {
        // logged in
        const url = 'https://reqres.in/api/users/2';
        // not found
        // const url = 'https://reqres.in/api/users/23';

        return getUser(url)
            .then((json) => {
                if(hasData(json)){
                    this.hasDataHandler(json);
                } else {
                    this.noDataHandler();
                }
            })
    }

    hasDataHandler = (json) => {
        let data = json.data;
        let userObject = new User(data.email, data.id, data.first_name, data.last_name, data.avatar)
        this.setState({userObject: userObject, userLoggedIn: userObject.isLoggedIn(), callsMade: this.state.callsMade + 1});
    }

    noDataHandler = () => {
        this.setState({userLoggedIn: false});
    }

    componentDidMount() {
        this.callForUser();
    }

    displayScreen = () => {
        if (this.state.userLoggedIn === null) {
            return <Waiting/>
        } else if (this.state.userLoggedIn === true) {
            return <Profile/>
        } else if (this.state.userLoggedIn === false) {
            return <Authentication/>
        }
    }

    render() {
        return this.displayScreen() 
    }
    
}

export default Welcome;