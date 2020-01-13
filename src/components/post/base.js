import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DiscussionEmbed } from 'disqus-react';
import SideArticle from '../common/sideArticle';
import articleFourImg from '../../images/articles/article-04.jpg';
import articleFiveImg from '../../images/articles/article-05.jpg';
import articleSixImg from '../../images/articles/article-06.jpg';

const PostBase = ( { children } ) => {
    const disqusConfig = {
        shortname: 'marek-matejovic-portfolio',
        config: { identifier: 'halvah-tart-halvah-gummi-bonbon-cake-fruitcake-chocolate', title: 'Halvah tart halvah gummi bonbon cake fruitcake chocolate' },
    };


    return (
        <div className="post">
            <div className="container">
                <div className="post__inner grid-container grid-container--post">
                    { children }

                    <div className="post__separator"></div>

                    <ul className="post__tags">
                        <li>
                            <a href="#" className="button button--primary button--primary-light button--noshadow button--small">Travel</a>
                        </li>
                        <li>
                            <a href="#" className="button button--primary button--primary-light button--noshadow button--small">Opinion</a>
                        </li>
                        <li>
                            <a href="#" className="button button--primary button--primary-light button--noshadow button--small">Love</a>
                        </li>
                    </ul>

                    <div className="post__share">
                        <h4>Share this article</h4>

                        <ul>
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

                    <DiscussionEmbed {...disqusConfig} />

                    <h2 className="related-article__heading">Related articles</h2>

                    <SideArticle 
                        imgSrc={ articleFourImg }
                        imgAlt="Related article"
                        title="Sweet jelly beans biscuit croissant lemon drops cotton"
                        category="Web Development"
                        date="20 hours ago"
                    /> 

                    <SideArticle 
                        imgSrc={ articleFiveImg }
                        imgAlt="Related article"
                        title="Macaroon chocolate bar sweet roll lollipop marzipan"
                        category="Web Development"
                        date="21 hours ago"
                    /> 

                    <SideArticle 
                        imgSrc={ articleSixImg }
                        imgAlt="Related article"
                        title="Gummies donut chocolate sesame snaps danish croissant chupa"
                        category="Web Development"
                        date="22 hours ago"
                    />                
                </div>
            </div>
        </div>
    );
};


export default PostBase;



/*<div className="related-article">
                        <img src={ articleFourImg } alt="" className="related-article__img" />

                        <div className="related-article__meta">
                            <a href="#" className="related-article__category">Web Development</a>
                        </div>

                        <a href="#" className="related-article__heading">
                            <h4>Sweet jelly beans biscuit croissant lemon drops cotton</h4>
                        </a>

                        <div className="related-article__footer">
                            <time dateTime="" className="related-article__date">20 hours ago</time>
                        </div>
                    </div>

                    <div className="related-article">
                        <img src={ articleFiveImg } alt="" className="related-article__img" />

                        <div className="related-article__meta">
                            <a href="#" className="related-article__category">Web Development</a>
                        </div>

                        <a href="#" className="related-article__heading">
                            <h4>Macaroon chocolate bar sweet roll lollipop marzipan</h4>
                        </a>

                        <div className="related-article__footer">
                            <time dateTime="" className="related-article__date">21 hours ago</time>
                        </div>
                    </div>

                    <div className="related-article">
                        <img src={ articleSixImg } alt="" className="related-article__img" />

                        <div className="related-article__meta">
                            <a href="#" className="related-article__category">Web Development</a>
                        </div>

                        <a href="#" className="related-article__heading">
                            <h4>Gummies donut chocolate sesame snaps danish croissant chupa</h4>
                        </a>

                        <div className="related-article__footer">
                            <time dateTime="" className="related-article__date">22 hours ago</time>
                        </div>
                    </div>*/