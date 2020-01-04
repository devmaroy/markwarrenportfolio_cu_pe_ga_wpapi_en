import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NotFoundPage = () => {
    return (
        <div className="error">
            <div className="container">
                <div className="error__inner">
                    <h1 className="error__heading">404</h1>
                    <h2 className="error__subheading">We're so sorry! Something wrong. Sad ...</h2>

                    <div className="error__text">
                        <p>Why? It's because the page you are looking for doesn't exists. Maybe you have a typo or something else went wrong. Don't worry if you feel a little bit lost! You can always go back to our homepage and try again.</p>
                    </div>
                    
                    <a href="/" className="error__link">
                        <FontAwesomeIcon icon="angle-double-left" fixedWidth /> Back to home!
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;