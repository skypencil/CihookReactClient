import React from "react";
import {auth, googleAuthProvider, facebookAuthProvider, emailAuthProvider } from "../../../firebase";

const Authentication = () => {
    const loginWithHandler = (provider) => {
        auth.signInWithPopup(provider).then(() => {
          console.log("user logged in with", provider.providerId)  
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            console.log("this is the error object: ",error)
        })
    }

    return( 
    <div>
        <button type="button" onClick= {() => {loginWithHandler(facebookAuthProvider)}}>Sign in with Facebook</button>
        <button type="button" onClick= {() => {loginWithHandler(googleAuthProvider)}}>Sign in with Google</button>
        <button type="button" onClick= {() => {loginWithHandler(emailAuthProvider)}}>Sign in with email</button>
    </div>
     )
}

export default Authentication;