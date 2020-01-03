import React from 'react';
import Heading from '../common/heading';
import articleOneImg from '../../images/recent-articles/article-1.jpg';
import articleTwoImg from '../../images/recent-articles/article-2.jpg';
import articleThreeImg from '../../images/recent-articles/article-3.jpg';

const RecentArticles = () => {
    return (
        <section className="recent-articles">
            <div className="container">
                <div className="recent-articles__inner grid-container">
                    <Heading main="My Recent Articles" sub="Blog" />
                    
                    <div className="recent-article">
                        <img src={ articleOneImg } alt="" className="recent-article__img" />

                        <div className="recent-article__meta">
                            <a href="#" className="recent-article__category">Web Development</a>
                        </div>

                        <a href="#" className="recent-article__heading">
                            <h4>Halvah tart halvah gummi bonbon cake fruitcake chocolate</h4>
                        </a>

                        <div className="recent-article__footer">
                            <time dateTime="" className="recent-article__date">3 hours ago</time>
                        </div>
                    </div>
                    
                    <div className="recent-article">
                        <img src={ articleTwoImg } alt="" className="recent-article__img" />

                        <div className="recent-article__meta">
                            <a href="#" className="recent-article__category">UI Design</a>
                        </div>

                        <a href="#" className="recent-article__heading">
                            <h4>Oat beans lemon drops fruitcake topping pie pudding apple</h4>
                        </a>
                        
                        <div className="recent-article__footer">
                            <time dateTime="" className="recent-article__date">6 hours ago</time>
                        </div>
                    </div>
                    
                    <div className="recent-article">
                        <img src={ articleThreeImg } alt="" className="recent-article__img" />

                        <div className="recent-article__meta">
                            <a href="#" className="recent-article__category">Review</a>
                        </div>

                        <a href="#" className="recent-article__heading">
                            <h4>Marshmallow wafer chocolate macaroon sesame snaps bar</h4>
                        </a>
                        
                        <div className="recent-article__footer">
                            <time dateTime="" className="recent-article__date">20 hours ago</time>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default RecentArticles;