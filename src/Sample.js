import React, {Component} from 'react';
import * as UserCalls from "./scripts/apiCalls/userCalls";

class Sample extends Component {
    constructor(){
        super();
        this.state = {
            users: [],
        };
    }

    componentDidMount(){
        UserCalls.getUsers().then(usersFromApi => this.setState({users : usersFromApi}));
    }

    render(){
        return(
            <div id="user-list">
                {console.log(this.state.users)}

                {this.state.users.map(userObj => 
                        userObj.name ? 
                        <h1 key={"user-" + userObj.name} id={"user-" + userObj.name}>{userObj.name}</h1>
                        : 
                        <h1 key={"user-" + userObj.userError} className={"errorMessageLarge"}>{userObj.userError}</h1>
                )}
            </div>
        )
    }
}

export default Sample;