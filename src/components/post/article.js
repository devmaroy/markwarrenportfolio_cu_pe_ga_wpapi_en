import React from 'react';
import { singlePostPropTypes } from '../../propTypesValues';
import { Link } from 'gatsby';
import { format } from 'timeago.js';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShareLinks from '../common/shareLinks';


const Article = ( { id, title, slug, content, featured_media, date, categories, tags } ) => {

    return (
        <article className="article grid-container">
            <header className="article__header">
                <Link 
                    to="/blog" 
                    className="article__back buttdon bdutton--primary"
                >
                    <FontAwesomeIcon icon="angle-double-left" fixedWidth /> Go back
                </Link>

                <h1 className="article__title">
                    <Link to={ `/post/${ slug }` }>{ title }</Link>
                </h1>

                <div className="article__meta">
                    <ul className="article__categories">
                        {
                            categories.map( ( { id, name, slug } ) => (
                                <li key={ id }>
                                    <Link to={ `/category/${ slug }` } className="article__category">{ name }</Link>
                                </li>
                            ))
                        }
                    </ul>

                    <time dateTime={ date } className="article__date">{ format( date ) }</time>
                </div>
            </header>

            <div className="article__featured">
                <Img 
                    fluid={ featured_media.localFile.childImageSharp.fluid } 
                    alt="Featured image" 
                    className="article__featured-img"
                />
            </div>

            <div className="article__content" dangerouslySetInnerHTML={ { __html: content } } />

            <div className="post__separator"></div>

            <footer className="article__footer">
                <ul className="article__tags">
                    {
                        tags && tags.map( ( { id, name, slug } ) => (
                            <li key={ id }>
                                <Link 
                                    to={ `/tag/${ slug }` } 
                                    className="button button--primary button--primary-light button--noshadow button--small article__tag"
                                >
                                    { name }
                                </Link>
                            </li>
                        ))
                    }
                </ul>

                <div className="article__share">
                    <h4 className="article__share-heading">Share this article</h4>

                    <ShareLinks url={ `/post/${ slug }` } />
                </div>
            </footer>
        </article>
    );
};


Article.propTypes = {
    ...singlePostPropTypes
};


export default Article;