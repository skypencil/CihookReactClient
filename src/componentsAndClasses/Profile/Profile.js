import React from 'react';
import firebase from '../classes/firebase';

const Profile = props => {
    const { first_name, id, email, avatar } = props.userObject;
    const logoutHanlder = () => {
        firebase
            .auth()
            .signOut()
            .then(function() {
                props.noDataHandler();
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    return (
        <div>
            <p>{first_name} is logged in</p>
            <p>User ID: {id}</p>
            <p>Email : {email}</p>
            <img src={avatar} alt={first_name} />
            <p>
                <button type="button" onClick={() => logoutHanlder()}>
                    Log out
                </button>
            </p>
        </div>
    );
};

export default Profile;
