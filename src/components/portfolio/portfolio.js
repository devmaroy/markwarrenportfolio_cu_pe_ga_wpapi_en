import React from 'react';
import Heading from '../common/heading';
import portfolioOneImg from '../../images/portfolio/portfolio-1.jpg';
import portfolioTwoImg from '../../images/portfolio/portfolio-2.jpg';
import portfolioThreeImg from '../../images/portfolio/portfolio-3.jpg';
import portfolioFourImg from '../../images/portfolio/portfolio-4.jpg';
import portfolioFiveImg from '../../images/portfolio/portfolio-5.jpg';
import portfolioSixImg from '../../images/portfolio/portfolio-6.jpg';


const Portfolio = () => {
    return (
        <section className="portfolio">
            <div className="container">
                <div className="portfolio__inner grid-container">
                    <Heading main="My Latest Projects" sub="Portfolio" />

                    <ul className="portfolio__navigation">
                        <li>
                            <a href="/" className="active">All</a>
                        </li>
                        <li>
                            <a href="/">UI/UX Design</a>
                        </li>
                        <li>
                            <a href="/">Web Development</a>
                        </li>
                        <li>
                            <a href="/">Web Design</a>
                        </li>
                    </ul>

                    <div className="portfolio__items">
                        <div className="portfolio__item">
                            <img src={ portfolioOneImg } alt="" />

                            <div className="portfolio__overlay">
                                <h3 className="portfolio__heading">Danish sweet lemon</h3>
                                <div className="portfolio__text">
                                    <p>Muffin icing croissant sesame snaps biscuit. Topping croissant pie icing tart plum sesame.</p>
                                </div>
                            </div>    
                        </div>
                        <div className="portfolio__item">
                            <img src={ portfolioTwoImg } alt="" />
                        </div>
                        <div className="portfolio__item">
                            <img src={ portfolioThreeImg } alt="" />
                        </div>
                        <div className="portfolio__item">
                            <img src={ portfolioFourImg } alt="" />
                        </div>
                        <div className="portfolio__item">
                            <img src={ portfolioFiveImg } alt="" />
                        </div>
                        <div className="portfolio__item">
                            <img src={ portfolioSixImg } alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;