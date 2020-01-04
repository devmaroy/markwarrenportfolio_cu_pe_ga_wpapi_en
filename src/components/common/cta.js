import React from 'react';

const CTA = ( { title, children } ) => {
    return (
        <section className="cta">
            <div className="container">
                <div className="cta__inner grid-container">
                    <div className="cta-box">
                        <h2 className="cta-box__heading">{ title }</h2>

                        <div className="cta-box__content">
                            { children }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;

/*                        <div className="cta-box__content">
                            <p>Lemon drops apple pie marshmallow caramels carrot cake cookie 
                            cotton candy. Marshmallow sugar plum chocolate.</p>
                        </div>

                        <button className="button button--secondary">Hire me</button>*/