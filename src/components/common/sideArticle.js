import React from 'react';
import PropTypes from 'prop-types';
import { taxonomyPropTypes } from '../../propTypesValues';
import { Link } from 'gatsby';
import { format } from 'timeago.js';
import Img from 'gatsby-image';


const SideArticle = ( { imgSrc, imgAlt, categories, title, slug, date } ) => { 
    return (
        <div className="side-article">
            <Link to={ `/post/${ slug }` }>
                <Img
                    fluid={ imgSrc }
                    alt={ imgAlt } 
                    className="side-article__img"
                />
            </Link>
        
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

            <Link to={ `/post/${ slug }` } className="side-article__heading">
                <h4>{ title }</h4>
            </Link>

            <div className="side-article__footer">
                <time dateTime={ date } className="side-article__date">{ format( date ) }</time>
            </div>
        </div>
    );
};


SideArticle.propTypes = {
    imgSrc: PropTypes.object.isRequired,
    imgAlt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({
        ...taxonomyPropTypes
    })),
    date: PropTypes.string.isRequired,
};


export default SideArticle;