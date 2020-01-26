import React, { useContext } from 'react';
import { AppContext } from '../../App';
import { logoutHanlder } from '../../lib/user/firebaseUserAuthHandlers';
import firebase from '../../lib/firebase/firebase';

const Profile = () => {
    const store = useContext(AppContext);
    const userObj = store.userObject.get;
    return (
        <div>
            <p>{userObj.first_name} is logged in</p>
            <p>User ID: {userObj.id}</p>
            <p>Email : {userObj.email}</p>
            <img src={userObj.avatar} alt={userObj.first_name} />
            <p>
                <button
                    type="button"
                    onClick={() => logoutHanlder(firebase, store)}
                >
                    Log out
                </button>
            </p>
        </div>
    );
};

export default Profile;
