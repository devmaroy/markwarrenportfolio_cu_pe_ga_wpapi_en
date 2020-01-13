import React from 'react';
import Heading from '../common/heading';
import aboutImg from '../../images/about/me-about.jpg';


const About = () => {
    return (
        <section id="about" className="about divider-space">
            <div className="container">
                <div className="about__inner grid-container">
                    <Heading main="Just a Little" sub="About" />

                    <div className="about-img">
                        <div className="about-img__inner">
                            <img src={ aboutImg } alt="Me" />
                        </div>
                    </div>

                    <div className="about-info">
                        <h3 className="about-info__heading">Marshmallow fruitcake muffin candy tarts donut chocolate.</h3>

                        <div className="about-info__text">
                            <p>Chocolate marshmallow sugar tootsie roll pie pastry cake dessert 
                            apple pie gummies gingerbread sugar plum. Biscuit powder 
                            danish chocolate cheesecake jujubes cheesecake chocolate 
                            brownie.</p>

                            <p>Powder oat cake ice cream soufflé jelly-o macaroon sesame snaps candy biscuit danis. 
                            Lollipop pudding gingerbread marshmallow marzipan cotton candy sweet roll lollipop. 
                            Gingerbread bear claw wafer dragée jelly beans macaroon bear.</p>    
                        </div>
                    
                        <div className="about-info__technologies">
                            <h4 className="about-info__technologies-heading">Technologies I use</h4>
                            <ul className="about-info__technologies-list">
                                <li>React</li>
                                <li>NodeJS</li>
                                <li>Express</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>       
                    </div>
                </div>
            </div>
        </section>
    );
};


export default About;