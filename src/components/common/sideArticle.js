import React from 'react';
import PropTypes from 'prop-types';


const SideArticle = ( { imgSrc, imgAlt, category, title, date } ) => {
    return (
        <div className="side-article">
            <img src={ imgSrc } alt={ imgAlt } className="side-article__img" />

            <div className="side-article__meta">
                <a href="#" className="side-article__category">{ category }</a>
            </div>

            <a href="#" className="side-article__heading">
                <h4>{ title }</h4>
            </a>

            <div className="side-article__footer">
                <time dateTime={ date } className="side-article__date">{ date }</time>
            </div>
        </div>
    );
};


SideArticle.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};


export default SideArticle;