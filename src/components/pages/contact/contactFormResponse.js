import React from 'react';
import PropTypes from 'prop-types';


const ContactFormResponse = ( { heading, type, emoji, children } ) => {
    return (
        <div className={ `form__submitted form__submitted--${ type }` }>
            <h4 className="form__submitted-heading">
                { heading }
                { emoji && ( <span role="img" aria-label="emoji"> { emoji }</span> ) }
            </h4>
            <div className="form__submitted-text">
                { children }
            </div>
        </div>
    );
};


ContactFormResponse.defaultProps = {
    type: 'success',
    emoji: '👍'
}


ContactFormResponse.propTypes = {
    heading: PropTypes.string.isRequired,
    type: PropTypes.string,
    emoji: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default ContactFormResponse;