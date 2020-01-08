import React from 'react';
import SidebarHeading from './sidebarHeading';

const Categories = () => {
    return (
        <div className="blog-sidebar-categories">
            <SidebarHeading heading="Categories" />

            <ul className="blog-sidebar-categories__list">
                <li className="blog-sidebar-categories__item">
                    <a href="#" className="blog-sidebar-categories__link">Web Development(12)</a>
                </li>
                <li className="blog-sidebar-categories__item">
                    <a href="#" className="blog-sidebar-categories__link">UI Design(9)</a>
                </li>
                <li className="blog-sidebar-categories__item">
                    <a href="#" className="blog-sidebar-categories__link">Review(6)</a>
                </li>
            </ul>
        </div>
    );
};

export default Categories;