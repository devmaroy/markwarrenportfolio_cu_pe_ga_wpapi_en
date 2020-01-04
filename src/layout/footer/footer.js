import React from 'react';
import SiteLogo from '../header/siteLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <SiteLogo />
                    
                    <div className="footer__copyright">
                        <p>©2019 All Rights Reserved.</p>
                    </div>

                    <div className="footer__social">
                        <ul className="social-list">
                            <li className="social-list__item">
                                <a href="#" className="social-list__link">
                                    <FontAwesomeIcon icon={ [ "fab", 'facebook-f' ] } fixedWidth />
                                </a>
                            </li>
                            <li className="social-list__item">
                                <a href="#" className="social-list__link">
                                    <FontAwesomeIcon icon={ [ "fab", 'twitter' ] } fixedWidth />
                                </a>
                            </li>
                            <li className="social-list__item">
                                <a href="#" className="social-list__link">
                                    <FontAwesomeIcon icon={ [ "fab", 'instagram' ] } fixedWidth />
                                </a>
                            </li>
                            <li className="social-list__item">
                                <a href="#" className="social-list__link">
                                    <FontAwesomeIcon icon={ [ "fab", 'linkedin-in' ] } fixedWidth />
                                </a>
                            </li>
                            <li className="social-list__item">
                                <a href="#" className="social-list__link">
                                    <FontAwesomeIcon icon={ [ "fab", 'youtube' ] } fixedWidth />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;