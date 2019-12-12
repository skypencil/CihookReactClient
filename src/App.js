import React, { useState, createContext } from 'react';
import WelcomScreen from './componentsAndClasses/WelcomeScreen/WelcomeScreen';
import './App.css';

export const AppContext = createContext({});

export const App = () => {
    const [userObject, setUserObject] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(null);
    const [callsMade, setCallsMade] = useState(0);
    const [error, setError] = useState({
        hasError: null,
        errorCode: null,
        errorMessage: null,
    });

    const store = {
        userObject: { get: userObject, set: setUserObject },
        userLoggedIn: { get: userLoggedIn, set: setUserLoggedIn },
        callsMade: { get: callsMade, set: setCallsMade },
        error: { get: error, set: setError },
    };

    return (
        <div className="App">
            <AppContext.Provider value={store}>
                <WelcomScreen />
            </AppContext.Provider>
        </div>
    );
};
