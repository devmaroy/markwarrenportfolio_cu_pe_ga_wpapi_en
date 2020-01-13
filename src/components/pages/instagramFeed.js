import React from 'react';
import SlickSlider from 'react-slick';
import Heading from '../common/heading';
import InstagramFeedItem from './../common/instagramFeedItem';
import feedImg1 from '../../images/instagram/feed-01.jpg';
import feedImg2 from '../../images/instagram/feed-02.jpg';
import feedImg3 from '../../images/instagram/feed-03.jpg';
import feedImg4 from '../../images/instagram/feed-04.jpg';
import feedImg5 from '../../images/instagram/feed-05.jpg';
import feedImg6 from '../../images/instagram/feed-06.jpg';


const InstagramFeed = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        customPaging: function(i) {
            return (
                <button></button>
            );
        },
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
            },
            {
              breakpoint: 720,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            }
        ],
    };

    return (
        <section className="instagram-feed divider-space">
            <div className="container">
                <Heading main="Follow Me" sub="Instagram" /> 
            </div>
            
            <div className="contaidner no-divider sacek">
                <SlickSlider { ...sliderSettings } >
                    <InstagramFeedItem imgSrc={ feedImg1 } imgAlt="Instagram feed" />
                    <InstagramFeedItem imgSrc={ feedImg2 } imgAlt="Instagram feed" />
                    <InstagramFeedItem imgSrc={ feedImg3 } imgAlt="Instagram feed" />
                    <InstagramFeedItem imgSrc={ feedImg4 } imgAlt="Instagram feed" />
                    <InstagramFeedItem imgSrc={ feedImg5 } imgAlt="Instagram feed" />
                    <InstagramFeedItem imgSrc={ feedImg6 } imgAlt="Instagram feed" />
                </SlickSlider>
            </div>
        </section>
    );
};


export default InstagramFeed;