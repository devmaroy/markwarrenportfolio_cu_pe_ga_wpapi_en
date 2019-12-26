import React from 'react';
import { Link } from 'gatsby';


const SiteLogo = () => {
    return (
        <div className="site-logo">
            <Link to="/" className="site-logo__link">
                <h1 className="site-logo__text">WARREN
                    <span>.</span>
                </h1>
            </Link>
        </div>
    );
};


export default SiteLogo;