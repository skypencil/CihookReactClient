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
        UserCalls.getUsers.then(usersJson => this.setState({users: usersJson})).catch(e => console.log(e));
    }

    render(){
        return(
            <div id="user-list">
                {this.state.users.map(userObj => 
                    <h1 key={"user-" + userObj.name} id={"user-" + userObj.name}>{userObj.name}</h1>
                )}
            </div>
        )
    }
}

export default Sample;