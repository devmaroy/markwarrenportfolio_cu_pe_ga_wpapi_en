import React from 'react';
import Heading from './common/heading';
import servicesOneImg from '../images/icons/services-01.svg';
import servicesTwoImg from '../images/icons/services-02.svg';
import servicesThreeImg from '../images/icons/services-03.svg';

const Services = () => {
    return (
        <section className="services">
            <div className="container">
                <div className="services__inner grid-container">
                    <Heading main="What I Do" sub="Services" />

                    <div className="card">
                        <div className="card__meta">
                            <span className="card__number">01</span>
                            <img className="card__icon" src={ servicesOneImg } alt="Services icon" />
                        </div>

                        <h3 className="card__title">UI/UX Design</h3>

                        <div className="card__text">
                            <p>Wafer cotton wafer muffin gingerbread rolls. Sweet lemon oat cake candy jelly beans.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card__meta">
                            <span className="card__number">02</span>
                            <img className="card__icon" src={ servicesTwoImg } alt="Services icon" />
                        </div>

                        <h3 className="card__title">Web Design</h3>

                        <div className="card__text">
                            <p>Pastry fruitcake candy cotton candy pastry soufflé cupcake macaroon sweet roll.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card__meta">
                            <span className="card__number">03</span>
                            <img className="card__icon" src={ servicesThreeImg } alt="Services icon" />
                        </div>

                        <h3 className="card__title">Web Development</h3>

                        <div className="card__text">
                            <p>Bear claw marzipan wafer apple pie tootsie roll. Jelly-o chocolate bar cookie cake bonbon.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;