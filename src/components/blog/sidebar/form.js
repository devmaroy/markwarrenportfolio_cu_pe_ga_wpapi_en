import React from 'react';
import PropTypes from 'prop-types';


const SidebarForm = ( { inputType, placeholder, children } ) => {
    return (
        <form className="sidebar-form">
            <div className="sidebar-form__group">
                <input type={ inputType } className="sidebar-form__control" placeholder={ placeholder } />
                <button className="sidebar-form__control sidebar-form__button">
                    { children }
                </button>                        
            </div>
        </form>
    );
};

SidebarForm.propTypes = {
    inputType: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};


export default SidebarForm;