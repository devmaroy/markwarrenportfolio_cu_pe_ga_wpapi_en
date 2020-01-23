import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import personalImg from '../../images/hero/me-hero.svg';
import cv from '../../images/cv.pdf';


const Hero = () => {
    return (
        <section className="hero divider-space">
            <div className="container">
                <div className="hero__inner grid-container">
                   <div className="hero-info">
                        <h1 className="hero-info__title">Mark Warren</h1>
                        <h2 className="hero-info__subtitle">I'm front-end developer & designer</h2>

                        <div className="hero-info__text">
                            <p>Gingerbread carrot cake marshmallow. Jelly-o pie sweet marzipan 
                            bear claw sweet roll wafer. Sweet roll cheesecake oat cake wafer 
                            jelly chupa chups.</p>
                        </div>

                        <a href={cv} className="button button--primary">Download CV</a>
                        <ScrollLink 
                            to="portfolio"
                            className="button button--outline-primary"
                            spy={ true }
                            hashSpy={ true }
                            smooth={ true }
                            duration={ 500 }
                        >
                            See Projects
                        </ScrollLink>                    
                   </div>

                   <div className="hero-img">
                        <div className="hero-img__inner">
                            <img src={ personalImg } alt="Me"/>    
                        </div>   
                   </div>
                </div>
            </div>
        </section>
    );
};


export default Hero;