import React from 'react';
import Heading from './common/heading';
import addIcon from '../images/icons/add.svg';
import portfolioOneImg from '../images/portfolio/portfolio-1.jpg';
import portfolioTwoImg from '../images/portfolio/portfolio-2.jpg';
import portfolioThreeImg from '../images/portfolio/portfolio-3.jpg';
import portfolioFourImg from '../images/portfolio/portfolio-4.jpg';
import portfolioFiveImg from '../images/portfolio/portfolio-5.jpg';
import portfolioSixImg from '../images/portfolio/portfolio-6.jpg';


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
                            <img src={ portfolioOneImg } className="portfolio__img" alt="" />

                            <div className="portfolio__overlay">
                                <div className="portfolio__overlay-header">
                                    <img src={ addIcon } className="portfolio__icon" />
                                </div>

                                <div className="portfolio__overlay-content">
                                    <h3 className="portfolio__heading">Danish sweet lemon</h3>
                                    <div className="portfolio__text">
                                        <p>Muffin icing croissant sesame snaps biscuit. Topping croissant pie icing tart plum sesame.</p>
                                    </div>
                                </div>
                            </div>    
                        </div>
                        
                        <div className="portfolio__item">
                            <img src={ portfolioTwoImg } className="portfolio__img" alt="" />

                            <div className="portfolio__overlay">
                                <div className="portfolio__overlay-header">
                                    <img src={ addIcon } className="portfolio__icon" />
                                </div>

                                <div className="portfolio__overlay-content">
                                    <h3 className="portfolio__heading">Danish sweet lemon</h3>
                                    <div className="portfolio__text">
                                        <p>Muffin icing croissant sesame snaps biscuit. Topping croissant pie icing tart plum sesame.</p>
                                    </div>
                                </div>
                            </div>    
                        </div>

                        <div className="portfolio__item">
                            <img src={ portfolioThreeImg } className="portfolio__img" alt="" />

                            <div className="portfolio__overlay">
                                <div className="portfolio__overlay-header">
                                    <img src={ addIcon } className="portfolio__icon" />
                                </div>

                                <div className="portfolio__overlay-content">
                                    <h3 className="portfolio__heading">Danish sweet lemon</h3>
                                    <div className="portfolio__text">
                                        <p>Muffin icing croissant sesame snaps biscuit. Topping croissant pie icing tart plum sesame.</p>
                                    </div>
                                </div>
                            </div>    
                        </div>

                        <div className="portfolio__item">
                            <img src={ portfolioFourImg } className="portfolio__img" alt="" />

                            <div className="portfolio__overlay">
                                <div className="portfolio__overlay-header">
                                    <img src={ addIcon } className="portfolio__icon" />
                                </div>

                                <div className="portfolio__overlay-content">
                                    <h3 className="portfolio__heading">Danish sweet lemon</h3>
                                    <div className="portfolio__text">
                                        <p>Muffin icing croissant sesame snaps biscuit. Topping croissant pie icing tart plum sesame.</p>
                                    </div>
                                </div>
                            </div>    
                        </div>

                        <div className="portfolio__item">
                            <img src={ portfolioFiveImg } className="portfolio__img" alt="" />

                            <div className="portfolio__overlay">
                                <div className="portfolio__overlay-header">
                                    <img src={ addIcon } className="portfolio__icon" />
                                </div>

                                <div className="portfolio__overlay-content">
                                    <h3 className="portfolio__heading">Danish sweet lemon</h3>
                                    <div className="portfolio__text">
                                        <p>Muffin icing croissant sesame snaps biscuit. Topping croissant pie icing tart plum sesame.</p>
                                    </div>
                                </div>
                            </div>    
                        </div>

                        <div className="portfolio__item">
                            <img src={ portfolioSixImg } className="portfolio__img" alt="" />

                            <div className="portfolio__overlay">
                                <div className="portfolio__overlay-header">
                                    <img src={ addIcon } className="portfolio__icon" />
                                </div>

                                <div className="portfolio__overlay-content">
                                    <h3 className="portfolio__heading">Danish sweet lemon</h3>
                                    <div className="portfolio__text">
                                        <p>Muffin icing croissant sesame snaps biscuit. Topping croissant pie icing tart plum sesame.</p>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>

                    <div className="portfolio__meta">
                        <button className="button button--primary">Load more</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;