import React, { useContext } from 'react';
import { AppContext } from '../../../App';

const CardAuthenticationError = () => {
    const store = useContext(AppContext);
    const error = store.error.get;

    return (
        <div>
            <p className="font-weight-normal text-danger">
                {error.errorMessage}
            </p>
            <p className="font-weight-normal text-danger">{error.errorEmail}</p>
        </div>
    );
};

export default CardAuthenticationError;
