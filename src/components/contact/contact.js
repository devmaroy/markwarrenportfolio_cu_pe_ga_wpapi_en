import React from 'react';
import contactImg from '../../images/contact.jpg';

const Contact = () => {
    return (
        <section className="contact">
            <div className="container">
                <div className="contact__inner grid-container">
                    <div className="contact__info">
                        <h2 className="contact__heading">Sugar pie gingerbread sugar plum biscuit tootsie oat cake.</h2>

                        <div className="contact__text">
                            <p>Toffee gummies pie macaroon sweet. Tiramisu carrot  jelly beans 
                            candy canes. Donut carrot chocolate cheesecake cheesecake ice 
                            brownie sugar plum donut.</p>
                        </div>

                        <form className="form">
                            <div className="form__group">
                                <input type="text" placeholder="First Name *" className="form__field" />
                            </div>
                            <div className="form__group">
                                <input type="text" placeholder="Last Name *" className="form__field" />
                            </div>
                            <div className="form__group">
                                <input type="text" placeholder="Email Address *" className="form__field" />
                            </div>
                            <div className="form__group">
                                <input type="text" placeholder="Subject *" className="form__field" />
                            </div>
                            <div className="form__group">
                                <textarea placeholder="Message *" className="form__field" rows="20"></textarea>
                            </div>

                            <div className="form__meta">
                                <button className="button button--primary">SEND</button>
                            </div>
                        </form>
                    </div>

                    <div className="contact__img">
                        <img src={ contactImg } alt="Picture of me working on macbook" />
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

export default Contact;