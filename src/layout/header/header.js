import React from 'react';
import SiteLogo from './siteLogo';
import Navigation from './navigation';


const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <SiteLogo />
                    <Navigation />
                    <div className="overlay"></div>
                </div>
            </div>
        </header>
    );
};


export default Header;