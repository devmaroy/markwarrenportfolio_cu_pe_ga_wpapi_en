import React from 'react';
import { Link } from 'gatsby';
import closeIcon from '../../images/icons/close.svg';


const Menu = ( { toggleMenu } ) => {
    return (
        <nav className="menu-list-wrapper">
            <ul className="menu-list">
                <li className="menu-list__item close" onClick={ toggleMenu }>
                    <img src={ closeIcon } alt="Close icon" />
                </li>
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
                    <Link to="/blog" className="menu-list__link">
                        Blog
                    </Link>
                </li>
            </ul>
        </nav>
    );
};


export default Menu;