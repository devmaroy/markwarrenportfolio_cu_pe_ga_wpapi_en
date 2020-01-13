import React from 'react';
import Heading from '../common/heading';
import starsIcon from '../../images/icons/stars.svg';
import userOne from '../../images/users/user-01.jpg';
import userTwo from '../../images/users/user-02.jpg';
import userThree from '../../images/users/user-03.jpg';


const Testimonials = () => {
    return (
        <section className="testimonials divider-space">
            <div className="container">
                <div className="testimonials__inner grid-container">
                    <Heading main="What My Cliens Say" sub="Testimonials" />

                    <div className="card card--testimonials card--onepage">
                        <div className="card__meta">
                            <img className="card__icon" src={ starsIcon } alt="Services icon" />
                        </div>

                        <div className="card__text">
                            <p>Bonbon cheesecake powder cakes chocolate pudding chocolate candy canes marzipan gummi bears jelly pie.</p>
                        </div>

                        <div className="card__footer">
                            <img src={ userOne } alt="" />

                            <div className="card__person">
                                <h4 className="card__person-name">William Soule</h4>
                                <p className="card__person-career">Manager at <strong>Tiramisu, Inc</strong></p>
                            </div>
                        </div>
                    </div>

                    <div className="card card--testimonials card--onepage">
                        <div className="card__meta">
                            <img className="card__icon" src={ starsIcon } alt="Services icon" />
                        </div>

                        <div className="card__text">
                            <p>Chocolate chupa chups gummies pastry dessert. Cake marshmallow chocolate bar toffee chocolate bar wafer chocolate cake.</p>
                        </div>

                        <div className="card__footer">
                            <img src={ userTwo } alt="" />

                            <div className="card__person">
                                <h4 className="card__person-name">Daniella Jones</h4>
                                <p className="card__person-career">Consultant at <strong>DJones, Inc</strong></p>
                            </div>
                        </div>
                    </div>

                    <div className="card card--testimonials card--onepage">
                        <div className="card__meta">
                            <img className="card__icon" src={ starsIcon } alt="Services icon" />
                        </div>

                        <div className="card__text">
                            <p>Lemon drops cake candy halvah candy canes. Dessert croissant ice cream cake apple pie icing.</p>
                        </div>

                        <div className="card__footer">
                            <img src={ userThree } alt="" />

                            <div className="card__person">
                                <h4 className="card__person-name">Hope Reese</h4>
                                <p className="card__person-career">Freelance developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Testimonials;