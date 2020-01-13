import React from 'react';
import Heading from './common/heading';
import SideArticle from './common/sideArticle';
import articleOneImg from '../images/articles/article-01.jpg';
import articleTwoImg from '../images/articles/article-02.jpg';
import articleThreeImg from '../images/articles/article-03.jpg';


const RecentArticles = () => {
    return (
        <section className="recent-articles divider-space">
            <div className="container">
                <div className="recent-articles__inner grid-container">
                    <Heading main="My Recent Articles" sub="Blog" />
                    
                    <SideArticle 
                        imgSrc={ articleOneImg } 
                        imgAlt="Project 1"
                        title="Halvah tart halvah gummi bonbon cake fruitcake chocolate"
                        category="Web Development"
                        date="3 hours ago"
                    />
                    
                    <SideArticle 
                        imgSrc={ articleTwoImg } 
                        imgAlt="Project 1"
                        title="Oat beans lemon drops fruitcake topping pie pudding apple"
                        category="Web Development"
                        date="6 hours ago"
                    />
                    
                    <SideArticle 
                        imgSrc={ articleThreeImg } 
                        imgAlt="Project 1"
                        title="Marshmallow wafer chocolate macaroon sesame snaps bar"
                        category="Web Development"
                        date="20 hours ago"
                    />
                </div>
            </div>
        </section>
    );
};


export default RecentArticles;