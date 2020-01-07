import React from 'react';
import contactImg from '../images/contact/contact.jpg';

const Contact = () => {
    return (
        <section className="contact divider-space">
            <div className="container">
                <div className="contact__inner grid-container">
                    <div className="contact-info">
                        <h2 className="contact-info__heading">Sugar pie gingerbread sugar plum biscuit tootsie oat cake.</h2>

                        <div className="contact-info__text">
                            <p>Toffee gummies pie macaroon sweet. Tiramisu carrot  jelly beans 
                            candy canes. Donut carrot chocolate cheesecake cheesecake ice 
                            brownie sugar plum donut.</p>
                        </div>

                        <form className="form">
                            <div className="form__group">
                                <input type="text" placeholder="First Name *" className="form__control" />
                            </div>
                            <div className="form__group">
                                <input type="text" placeholder="Last Name *" className="form__control" />
                            </div>
                            <div className="form__group">
                                <input type="text" placeholder="Email Address *" className="form__control" />
                            </div>
                            <div className="form__group">
                                <input type="text" placeholder="Subject *" className="form__control" />
                            </div>
                            <div className="form__group">
                                <textarea placeholder="Message *" className="form__control"></textarea>
                            </div>

                            <div className="form__meta">
                                <button className="button button--primary">SEND</button>
                            </div>
                        </form>
                    </div>

                    <div className="contact-img">
                        <div className="contact-img__inner">
                            <img src={ contactImg } alt="Me working on macbook" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;