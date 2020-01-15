import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { format } from 'timeago.js';


const SideArticle = ( { imgSrc, imgAlt, categories, title, date } ) => {
    return (
        <div className="side-article">
            <img src={ imgSrc } alt={ imgAlt } className="side-article__img" />

            <div className="side-article__meta">
                <ul className="side-article__categories">
                    {
                        categories.map(( { id, slug, name } ) => (
                            <li 
                                key={ id }
                            >
                                <Link 
                                    to={ `/category/${ slug }` } 
                                    className="side-article__category"
                                >
                                    { name }
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <a href="#" className="side-article__heading">
                <h4>{ title }</h4>
            </a>

            <div className="side-article__footer">
                <time dateTime={ date } className="side-article__date">{ format( date ) }</time>
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