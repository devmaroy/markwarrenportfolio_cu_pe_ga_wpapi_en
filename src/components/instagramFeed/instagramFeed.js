import React from 'react';
import Heading from '../common/heading';
import feedImg1 from '../../images/instagram-feed/feed-1.jpg';
import feedImg2 from '../../images/instagram-feed/feed-2.jpg';
import feedImg3 from '../../images/instagram-feed/feed-3.jpg';
import feedImg4 from '../../images/instagram-feed/feed-4.jpg';
import feedImg5 from '../../images/instagram-feed/feed-5.jpg';

const InstagramFeed = () => {
    return (
        <section className="instagram-feed">
            <div className="container">
                <Heading main="Follow Me" sub="Instagram" /> 
            </div>
            
            <div className="instragram-feed__list">
                <img src={ feedImg1 } alt=""/>
                <img src={ feedImg2 } alt=""/>
                <img src={ feedImg3 } alt=""/>
                <img src={ feedImg4 } alt=""/>
                <img src={ feedImg5 } alt=""/>
            </div>
        </section>
    );
};


export default InstagramFeed;