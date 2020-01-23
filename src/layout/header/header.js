import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import SiteLogo from './siteLogo';
import Navigation from './navigation';


const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <SiteLogo />
                    <Navigation />
                    <ScrollLink 
                        to="contact" 
                        className="button button--primary header__button"
                        spy={ true }
                        hashSpy={ true }
                        smooth={ true }
                        duration={ 500 }
                    >
                        Hire me
                    </ScrollLink>
                </div>
            </div>
        </header>
    );
};


export default Header;