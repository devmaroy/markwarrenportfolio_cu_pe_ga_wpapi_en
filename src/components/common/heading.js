import React from 'react';
import PropTypes from 'prop-types';


const Heading = ( { main, sub } ) => {
    return (
        <h1 className="section-heading">
            <span>{ sub }</span>
            { main }
        </h1>
    );
};



Heading.propTypes = {
    main: PropTypes.string,
    sub: PropTypes.string,
};


Heading.defaultProps = {
    main: 'Main Heading',
    sub: 'SubHeading',
}


export default Heading;