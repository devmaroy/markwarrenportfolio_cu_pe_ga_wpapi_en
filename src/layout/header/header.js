import React from 'react';
import SiteLogo from './siteLogo';
import Navigation from './navigation';


const Header = () => {
    return (
        <header className="header">
            <div className="grid">
                <SiteLogo />
                <Navigation />
                <div className="overlay"></div>
            </div>
        </header>
    );
};


export default Header;