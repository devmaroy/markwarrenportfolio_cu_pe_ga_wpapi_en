import React from 'react';
import spinner from '../../images/spinner.svg';


const Loading = () => {
    return (
        <div className="loading">
            <img className="loading__image" src={ spinner } alt="Loading" />
        </div>
    );
};


export default Loading;