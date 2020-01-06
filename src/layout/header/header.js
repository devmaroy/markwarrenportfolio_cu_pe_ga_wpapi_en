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
                    <button className="button button--primary header__button">Hire me</button>
                    <div className="overlay"></div>
                </div>
            </div>
        </header>
    );
};


export default Header;