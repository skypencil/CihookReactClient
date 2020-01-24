import React, { useContext } from 'react';
import { AppContext } from '../../App';
import firebase from '../../lib/firebase/firebase';
const Profile = props => {
    const store = useContext(AppContext);

    const { first_name, id, email, avatar } = props.userObjectFromState;

    return (
        <div>
            <p>{first_name} is logged in</p>
            <p>User ID: {id}</p>
            <p>Email : {email}</p>
            <img src={avatar} alt={first_name} />
            <p>
                <button
                    type="button"
                    onClick={() =>
                        props.newUser.logoutHanlder(
                            firebase,
                            props.newUser,
                            store
                        )
                    }
                >
                    Log out
                </button>
            </p>
        </div>
    );
};

export default Profile;
