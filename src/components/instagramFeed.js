import React from 'react';
import SlickSlider from 'react-slick';
import Heading from './common/heading';
import feedImg1 from '../images/instagram/feed-01.jpg';
import feedImg2 from '../images/instagram/feed-02.jpg';
import feedImg3 from '../images/instagram/feed-03.jpg';
import feedImg4 from '../images/instagram/feed-04.jpg';
import feedImg5 from '../images/instagram/feed-05.jpg';
import feedImg6 from '../images/instagram/feed-06.jpg';


const InstagramFeed = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        customPaging: function(i) {
            return (
                <button></button>
            );
        },
        responsive: [
            {
              breakpoint: 720,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
        ],
    };

    return (
        <section className="instagram-feed divider-space">
            <div className="container">
                <Heading main="Follow Me" sub="Instagram" /> 
            </div>
            
            <div className="container no-divider">
                <SlickSlider { ...sliderSettings } >
                    <div className="instagram-feed__item">
                        <img src={ feedImg1 } alt=""/>
                    </div>
                    <div className="instagram-feed__item">
                        <img src={ feedImg2 } alt=""/>
                    </div>
                    <div className="instagram-feed__item">
                        <img src={ feedImg3 } alt=""/>
                    </div>
                    <div className="instagram-feed__item">
                        <img src={ feedImg4 } alt=""/>
                    </div>
                    <div className="instagram-feed__item">
                        <img src={ feedImg5 } alt=""/>
                    </div>
                    <div className="instagram-feed__item">
                        <img src={ feedImg6 } alt=""/>
                    </div>
                </SlickSlider>
            </div>
        </section>
    );
};


export default InstagramFeed;