import React, { useState, useContext } from 'react';
import { auth } from '../../../lib/firebase/firebase';

import { AppContext } from '../../../App';

const SignInForm = () => {
    const store = useContext(AppContext);

    const redirectToSignUpPage = () => {
        store.userLoggedIn.set('wantsEmailPassSignup');
    };

    const signInWithEmail = (email, password) => {
        auth()
            .signInWithEmailAndPassword(email, password)
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log('signinformErrorCode: ', errorCode);
                console.log('signinformErrorMessage: ', errorMessage);
            });
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="d-flex justify-content-center">
            <form
                style={{
                    width: '400px',
                }}
            >
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
                <div>
                    <button
                        type="submit"
                        className="border-0 rounded"
                        style={{
                            background: '#ddbb00',
                            width: 330,
                            color: 'white',
                            margin: 2,
                        }}
                        onClick={e => {
                            e.preventDefault();
                            signInWithEmail(email, password);
                        }}
                    >
                        sign in
                    </button>

                    <button
                        type="button"
                        className="border rounded"
                        style={{ color: '#ddbb00' }}
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
