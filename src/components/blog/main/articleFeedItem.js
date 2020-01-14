import React from 'react';
import { Link } from 'gatsby';


const ArticleFeedItem = ( { featured_media, categories, plainDate, date, slug, title, excerpt } ) => {
    return (
        <div className="article-feed-item">
            <div className="article-feed-item__featured-img">
                <img src={ featured_media.source_url } alt="Article feed item" />
            </div>

            <div className="article-feed-item__meta">
                <ul className="article-feed-item__categories">
                    <li>
                        <Link to={ `/category/${ slug }` } className="article-feed-item__category">Web development</Link>
                    </li>
                </ul>

                <time dateTime={ plainDate } className="article-feed-item__date">{ date }</time>
            </div>

            <h2 className="article-feed-item__heading">
                <Link to={ `/post/${ slug }` }>{ title }</Link>
            </h2>

            <div className="article-feed-item__content" dangerouslySetInnerHTML={ { __html: excerpt } } />

            <a href="#" className="button button--primary article-feed-item__read-more">Read more</a>
        </div>
    );
};


export default ArticleFeedItem;