import React from 'react';
import { Link } from 'gatsby';
import hamburgerMenuIcon from '../../images/icons/hamburger-menu.svg'


const Navigation = () => {
    return (
        <div className="navigation">
            <div className="hamburger-menu">
                <img src={ hamburgerMenuIcon } alt="Hamburger menu icon" className="hamburger-menu__icon" />
            </div>
            <nav>
                <ul className="menu-list">
                    <li className="menu-list__item">
                        <Link to="#" className="menu-list__link active">
                            Home
                        </Link>
                    </li>
                    <li className="menu-list__item">
                        <Link to="#" className="menu-list__link">
                            About
                        </Link>
                    </li>
                    <li className="menu-list__item">
                        <Link to="#" className="menu-list__link">
                            Services
                        </Link>
                    </li>
                    <li className="menu-list__item">
                        <Link to="#" className="menu-list__link">
                            Portfolio
                        </Link>
                    </li>
                    <li className="menu-list__item">
                        <Link to="#" className="menu-list__link">
                            Reviews
                        </Link>
                    </li>
                    <li className="menu-list__item">
                        <Link to="#" className="menu-list__link">
                            Contact
                        </Link>
                    </li>
                    <li className="menu-list__item">
                        <Link to="#" className="menu-list__link">
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};


export default Navigation;