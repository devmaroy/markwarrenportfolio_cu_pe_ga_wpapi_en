import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NotFoundPage = () => {
    return (
        <div className="page-error">
            <div className="container">
                <div className="page-error__inner">
                    <h1 className="page-error__heading">404</h1>
                    <h2 className="page-error__subheading">We're so sorry! Something wrong. Sad ...</h2>

                    <div className="page-error__text">
                        <p>Why? It's because the page you are looking for doesn't exists. Maybe you have a typo or something else went wrong. Don't worry if you feel a little bit lost! You can always go back to our homepage and try again.</p>
                    </div>
                    
                    <a href="/" className="page-error__link">
                        <FontAwesomeIcon icon="angle-double-left" fixedWidth /> Back to home!
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;