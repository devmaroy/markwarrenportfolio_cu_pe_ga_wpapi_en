import React from 'react';
import SidebarHeading from './sidebarHeading';
import articleOneImg from '../../../images/recent-articles/article-1.jpg';
import articleTwoImg from '../../../images/recent-articles/article-2.jpg';
import articleThreeImg from '../../../images/recent-articles/article-3.jpg';

const RecentArticles = () => {
    return (
        <div className="blog-sidebar-recent-articles">
            <SidebarHeading heading="Recent articles" />

            <div className="blog-sidebar-recent-article">
                <div className="blog-sidebar-recent-article__header">
                    <img src={ articleOneImg  } alt="" className="blog-sidebar-recent-article__img" />
                </div>

                <div className="blog-sidebar-recent-article__content">
                    <a href="#" className="blog-sidebar-recent-article__link">Halvah tart halvah bonbon cake fruitcake chocolate</a>

                    <div className="blog-sidebar-recent-article__meta">
                        <ul className="blog-sidebar-recent-article__categories">
                            <li>
                                <a href="#" className="blog-sidebar-recent-article__category">Web development</a>
                            </li>
                            <li>
                                <a href="#" className="blog-sidebar-recent-article__category">Web development</a>
                            </li>
                        </ul>

                        <time dateTime="" className="blog-sidebar-recent-article__date">3 hours ago</time>
                    </div>
                </div>
            </div>

            <div className="blog-sidebar-recent-article">
                <div className="blog-sidebar-recent-article__header">
                    <img src={ articleTwoImg  } alt="" className="blog-sidebar-recent-article__img" />
                </div>

                <div className="blog-sidebar-recent-article__content">
                    <a href="#" className="blog-sidebar-recent-article__link">Oat beans lemon fruitcake topping pudding apple</a>

                    <div className="blog-sidebar-recent-article__meta">
                        <ul className="blog-sidebar-recent-article__categories">
                            <li>
                                <a href="#" className="blog-sidebar-recent-article__category">UI Design</a>
                            </li>
                            <li>
                                <a href="#" className="blog-sidebar-recent-article__category">UI</a>
                            </li>
                        </ul>

                        <time dateTime="" className="blog-sidebar-recent-article__date">6 hours ago</time>
                    </div>
                </div>
            </div>

            <div className="blog-sidebar-recent-article">
                <div className="blog-sidebar-recent-article__header">
                    <img src={ articleThreeImg  } alt="" className="blog-sidebar-recent-article__img" />
                </div>

                <div className="blog-sidebar-recent-article__content">
                    <a href="#" className="blog-sidebar-recent-article__link">Marshmallow chocolate macaroon sesame snaps</a>

                    <div className="blog-sidebar-recent-article__meta">
                        <ul className="blog-sidebar-recent-article__categories">
                            <li>
                                <a href="#" className="blog-sidebar-recent-article__category">Review</a>
                            </li>
                        </ul>

                        <time dateTime="" className="blog-sidebar-recent-article__date">20 hours ago</time>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentArticles;