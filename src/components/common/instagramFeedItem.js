import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import addIcon from '../../images/icons/add.svg';


const InstagramFeedItem = ( { id, imgSrc, imgAlt } ) => {
    return (
        <div className="instagram-feed-item">
            <a href={ `https://instagram.com/p/${ id }` } target="_blank" rel="noopener noreferrer">
                <Img fluid={ imgSrc } alt={ imgAlt } className="instagram-feed-item__img" />
                
                <div className="instagram-feed-item__overlay">
                    <img src={ addIcon } className="instagram-feed-item__icon" alt="Add icon" />
                </div>
            </a>
        </div>
    );
};


InstagramFeedItem.propTypes = {
    id: PropTypes.string.isRequired,
    imgSrc: PropTypes.object.isRequired,
    imgAlt: PropTypes.string.isRequired,
};


export default InstagramFeedItem;