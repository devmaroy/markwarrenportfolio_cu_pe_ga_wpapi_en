import React from 'react';
import SiteLogo from '../header/siteLogo';
import SocialLinks from '../../components/common/socialLinks';


const Footer = () => {
    return (
        <footer className="footer divider-space">
            <div className="container">
                <div className="footer__inner">
                    <SiteLogo />
                    
                    <div className="footer__copyright">
                        <p>&copy; { new Date().getFullYear() } All Rights Reserved.</p>
                    </div>

                    <div className="footer__social">
                        <SocialLinks type={ 'normal' } fixedWidth={ true } />
                    </div>
                </div>
            </div>
        </footer>
    );
};


export default Footer;