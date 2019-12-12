import React, { useState, useContext } from 'react';
import { auth } from '../../../../classes/firebase';

import { AppContext } from '../../../../../App';

const SignInForm = () => {
    const store = useContext(AppContext);

    const redirectToSignUpPage = () => {
        store.userLoggedIn.set('wantsEmailPassSignup');
    };

    const signInWithEmail = (email, password) => {
        console.log('email: ', email);
        console.log('password:', password);
        auth()
            .signInWithEmailAndPassword(email, password)
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            });
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={email}
                        onChange={e => {
                            setEmail(e.target.value);
                        }}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
                    </label>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={e => {
                        e.preventDefault();
                        signInWithEmail(email, password);
                    }}
                >
                    sign in
                </button>
                <div>
                    <button
                        type="button"
                        className="btn btn-link"
                        onClick={e => {
                            e.preventDefault();
                            redirectToSignUpPage();
                        }}
                    >
                        sign up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
