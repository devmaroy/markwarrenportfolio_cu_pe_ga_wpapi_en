import React from 'react';
import { Link } from 'gatsby';
import hamburgerMenuIcon from '../../images/icons/hamburger-menu.svg'


const Navigation = () => {
    return (
        <div className="navigation">
            <div className="hamburger-menu">
                <img src={ hamburgerMenuIcon } alt="Hamburger menu icon" className="hamburger-menu__icon" />
            </div>
            <nav className="navigation__inner">
                <ul className="menu-list">
                    <li className="menu-list-item">
                        <Link to="#" className="menu-list-item__link">
                            Hello there is not
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};


export default Navigation;