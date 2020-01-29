import React from 'react';


const CTA = ( { title, text, children } ) => {
    return (
        <section className="cta divider-space">
            <div className="container">
                <div className="cta__inner grid-container">
                    <div className="cta-box">
                        <h2 className="cta-box__heading">{ title }</h2>

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


export default CTA;