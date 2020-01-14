import React from 'react';
import { Link } from 'gatsby';
import { format } from 'timeago.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DiscussionEmbed } from 'disqus-react';
import SideArticle from '../common/sideArticle';
import articleOneImg from '../../images/articles/article-04.jpg';
import articleTwoImg from '../../images/articles/article-05.jpg';
import articleThreeImg from '../../images/articles/article-06.jpg';


const Post = ( { title, slug, date, featured_media, categories, tags, content } ) => {
    const disqusConfig = {
        shortname: process.env.GATSBY_DISQUS_NAME,
        config: { identifier: slug, title },
    };

    return (
        <div className="post">
            <div className="container">
                <div className="post__inner">
                    <article className="article grid-container">
                        <header className="article__header">
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

                        <div className="article__featured-img">
                            <img src={ featured_media.source_url } alt="Featured image" />
                        </div>

                        <div className="article__content" dangerouslySetInnerHTML={ { __html: content } } />

                        <div className="post__separator"></div>

                        <footer className="article__footer">
                            <ul className="article__tags">
                                {
                                    tags.map( ( { id, name, slug } ) => (
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

                                <ul className="article__share-links">
                                    <li>
                                        <a href="#">
                                            <FontAwesomeIcon icon={ [ "fab", 'facebook-f' ] } fixedWidth />
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <FontAwesomeIcon icon={ [ "fab", 'twitter' ] } fixedWidth />
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <FontAwesomeIcon icon={ [ "fab", 'linkedin-in' ] } fixedWidth />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </footer>
                    </article>

                    <div className="post__meta grid-container">
                        <DiscussionEmbed { ...disqusConfig } />

                        <h2 className="related-article__heading">Related articles</h2>

                        <SideArticle 
                            imgSrc={ articleOneImg }
                            imgAlt="Related article"
                            title="Sweet jelly beans biscuit croissant lemon drops cotton"
                            category="Web Development"
                            date="20 hours ago"
                        /> 

                        <SideArticle 
                            imgSrc={ articleTwoImg }
                            imgAlt="Related article"
                            title="Sweet jelly beans biscuit croissant lemon drops cotton"
                            category="Web Development"
                            date="20 hours ago"
                        /> 

                        <SideArticle 
                            imgSrc={ articleThreeImg }
                            imgAlt="Related article"
                            title="Sweet jelly beans biscuit croissant lemon drops cotton"
                            category="Web Development"
                            date="20 hours ago"
                        /> 
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Post;