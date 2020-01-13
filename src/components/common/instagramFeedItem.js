import React from 'react';
import PropTypes from 'prop-types';
import addIcon from '../../images/icons/add.svg';


const InstagramFeedItem = ( { imgSrc, imgAlt } ) => {
    return (
        <div className="instagram-feed-item">
            <img src={ imgSrc } alt={ imgAlt } className="instagram-feed-item__img" />

            <div className="instagram-feed-item__overlay">
                <img src={ addIcon } className="instagram-feed-item__icon" alt="Add icon" />
            </div>
        </div>
    );
};


InstagramFeedItem.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
};


export default InstagramFeedItem;