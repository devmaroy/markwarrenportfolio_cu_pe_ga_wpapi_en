import React from 'react';
import CTA from '../common/cta';

const NewsletterCTA = () => {
    return (
        <CTA title="Let’s stay in touch">
            <p>Tootsie roll sweet apple pie jelly-o donut muffin lemon drops. Brownie gingerbread halvah cupcake jelly beans toffee cotton.</p>

            <form className="newsletter-form">
                <div className="newsletter-form__group">
                    <input type="email" className="newsletter-form__control" placeholder="Email Address" />
                    <button className="newsletter-form__control newsletter-form__button">Subscribe</button>                        
                </div>
            </form>
        </CTA>
    );
};

export default NewsletterCTA;