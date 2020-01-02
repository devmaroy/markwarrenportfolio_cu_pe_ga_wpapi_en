import React from 'react';

const Heading = ( { main, sub } ) => {
    return (
        <h1 className="section-heading">
            <span>{ sub }</span>
            { main }
        </h1>
    );
};

export default Heading;