import React from 'react';
import PropTypes from 'prop-types';


const CTA = ( { title, text, children } ) => {
    return (
        <section className="cta divider-space" data-aos='slide-right'>
            <div className="container">
                <div className="cta__inner grid-container">
                    <div className="cta-box">
                        <h2 
                            className="cta-box__heading" 
                            dangerouslySetInnerHTML={ { __html: title } }
                        />
                        
                        <div className="cta-box__content">
                            <div className="cta-box__text" dangerouslySetInnerHTML={ { __html: text } } />
                            { children }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


CTA.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    children: PropTypes.element,
};


export default CTA;