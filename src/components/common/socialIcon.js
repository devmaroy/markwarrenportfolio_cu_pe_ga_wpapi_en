import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SocialIcon = ( { icon, type, fixedWidth } ) => {
    icon = icon.toLowerCase();

    const squareIcons = {
        facebook: 'facebook-square',
        twitter: 'twitter-square',
        linkedin: 'linkedin',
        youtube: 'youtube-square',
        instagram: 'instagram'
    }

    const normalIcons = {
        facebook: 'facebook-f',
        twitter: 'twitter',
        linkedin: 'linkedin-in',
        youtube: 'youtube',
        instagram: 'instagram'
    }

    const renderIcon = ( type ) => {
        switch ( type ) {
            case 'square':
                return <FontAwesomeIcon icon={ [ "fab", squareIcons[ icon ] ] } fixedWidth={ fixedWidth } />
            default:
                return <FontAwesomeIcon icon={ [ "fab", normalIcons[ icon ] ] } fixedWidth={ fixedWidth } />
        }
    }

    return renderIcon( type );
};


SocialIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    fixedWidth: PropTypes.bool,
};


SocialIcon.defaultProps = {
    fixedWidth: false
};


export default SocialIcon;