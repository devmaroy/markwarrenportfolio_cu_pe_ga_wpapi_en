import React from 'react';
import { Link } from 'gatsby';
import { format } from 'timeago.js';
import Img from 'gatsby-image';


const FeedItem = ( { featured_media, categories, date, slug, title, excerpt } ) => {
    return (
        <div className="feed-item">
            <div className="feed-item__featured">
                <Link to={ `/post/${ slug }` }>
                    <Img 
                        fluid={ featured_media.localFile.childImageSharp.fluid } 
                        alt="Feed item" 
                        className="feed-item__featured-img"
                    />
                </Link>
            </div>

            <div className="feed-item__meta">
                <ul className="feed-item__categories">
                    {
                        categories.map( ( { id, name, slug } ) => (
                            <li key={ id }>
                                <Link to={ `/category/${ slug }` } className="feed-item__category">{ name }</Link>
                            </li>
                        ))
                    }
                </ul>

                <time dateTime={ date } className="feed-item__date">{ format( date ) }</time>
            </div>

            <h2 className="feed-item__heading">
                <Link to={ `/post/${ slug }` }>{ title }</Link>
            </h2>

            <div className="feed-item__content" dangerouslySetInnerHTML={ { __html: excerpt } } />

            <a href="#" className="button button--primary feed-item__read-more">Read more</a>
        </div>
    );
};


export default FeedItem;