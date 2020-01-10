import React from 'react';
import SidebarHeading from './sidebarHeading';
import addIcon from '../../../images/icons/add.svg';
import feedImg1 from '../../../images/instagram-feed/feed-1.jpg';
import feedImg2 from '../../../images/instagram-feed/feed-2.jpg';
import feedImg3 from '../../../images/instagram-feed/feed-3.jpg';
import feedImg4 from '../../../images/instagram-feed/feed-4.jpg';
import feedImg5 from '../../../images/instagram-feed/feed-5.jpg';
import feedImg6 from '../../../images/instagram-feed/feed-6.jpg';


const InstagramFeed = () => {
    return (
        <div className="blog-sidebar-instagram-feed">
            <SidebarHeading heading="Follow me" />  

            <div className="blog-sidebar-instagram-feed__list">
                <div className="blog-sidebar-instagram-feed__item">
                    <img src={ feedImg1 } alt="" className="blog-sidebar-instagram-feed__img" />

                    <div className="blog-sidebar-instagram-feed__overlay">
                        <img src={ addIcon } className="portfolio__icon" alt="Add icon" />
                    </div>
                </div> 

                <div className="blog-sidebar-instagram-feed__item">
                    <img src={ feedImg2 } alt="" className="blog-sidebar-instagram-feed__img"/>

                    <div className="blog-sidebar-instagram-feed__overlay">
                        <img src={ addIcon } className="portfolio__icon" alt="Add icon" />
                    </div>
                </div> 

                <div className="blog-sidebar-instagram-feed__item">
                    <img src={ feedImg3 } alt="" className="blog-sidebar-instagram-feed__img"/>

                    <div className="blog-sidebar-instagram-feed__overlay">
                        <img src={ addIcon } className="portfolio__icon" alt="Add icon" />
                    </div>
                </div> 

                <div className="blog-sidebar-instagram-feed__item">
                    <img src={ feedImg4 } alt="" className="blog-sidebar-instagram-feed__img"/>

                    <div className="blog-sidebar-instagram-feed__overlay">
                        <img src={ addIcon } className="portfolio__icon" alt="Add icon" />
                    </div>
                </div> 

                <div className="blog-sidebar-instagram-feed__item">
                    <img src={ feedImg5 } alt="" className="blog-sidebar-instagram-feed__img"/>

                    <div className="blog-sidebar-instagram-feed__overlay">
                        <img src={ addIcon } className="portfolio__icon" alt="Add icon" />
                    </div>
                </div>

                <div className="blog-sidebar-instagram-feed__item">
                    <img src={ feedImg6 } alt="" className="blog-sidebar-instagram-feed__img"/>

                    <div className="blog-sidebar-instagram-feed__overlay">
                        <img src={ addIcon } className="portfolio__icon" alt="Add icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default InstagramFeed;