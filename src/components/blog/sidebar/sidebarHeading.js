import React from 'react';
import PropTypes from 'prop-types';


const SidebarHeading = ( { heading } ) => {
    return (
        <h2 className="blog-sidebar-heading">
            { heading }
        </h2>
    );
};


SidebarHeading.propTypes = {
    heading: PropTypes.string
};

SidebarHeading.defaultProps = {
    heading: 'Sidebar Heading'
};


export default SidebarHeading;