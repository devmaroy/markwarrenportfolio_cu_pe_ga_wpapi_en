import React from 'react';
import personalImg from '../../images/me.svg';


const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__inner grid-container">
                   <div className="hero-info">
                        <h1 className="hero-info__title">Mark Warren</h1>
                        <h2 className="hero-info__subtitle">I'm front-end developer & designer</h2>

                        <div className="hero-info-text">
                            <p>Gingerbread carrot cake marshmallow. Jelly-o pie sweet marzipan 
                            bear claw sweet roll wafer. Sweet roll cheesecake oat cake wafer 
                            jelly chupa chups.</p>
                        </div>

                        <button className="button button--primary">Download CV</button>
                        <button className="button button--secondary">See Projects</button>

                        <div className="shapes">
                            <div className="shape"></div>
                            <div className="shape"></div>
                        </div>
                   </div>

                   <div className="hero-img">
                        <img src={ personalImg } alt="Picture of me"/>

                        <div className="shapes">
                            <div className="shape"></div>
                            <div className="shape"></div>
                        </div>
                   </div>
                </div>
            </div>
        </section>
    );
};


export default Hero;