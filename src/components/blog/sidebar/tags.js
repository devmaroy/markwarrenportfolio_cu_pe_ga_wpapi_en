import React from 'react';
import SidebarHeading from './sidebarHeading';

const Tags = () => {
    return (
        <div className="blog-sidebar-tags">
            <SidebarHeading heading="Tags" />  

            <ul className="blog-sidebar-tags__list">
                <li className="blog-sidebar-tags__item">
                    <a href="#" className="button button--primary button--primary-light button--noshadow blog-sidebar-tags__link">Project(14)</a>
                </li>
                <li className="blog-sidebar-tags__item">
                    <a href="#" className="button button--primary button--primary-light button--noshadow blog-sidebar-tags__link">Design(13)</a>
                </li>
                <li className="blog-sidebar-tags__item">
                    <a href="#" className="button button--primary button--primary-light button--noshadow blog-sidebar-tags__link">Travel(11)</a>
                </li>
                <li className="blog-sidebar-tags__item">
                    <a href="#" className="button button--primary button--primary-light button--noshadow blog-sidebar-tags__link">Settings(10)</a>
                </li>
                <li className="blog-sidebar-tags__item">
                    <a href="#" className="button button--primary button--primary-light button--noshadow blog-sidebar-tags__link">Love(8)</a>
                </li>
                <li className="blog-sidebar-tags__item">
                    <a href="#" className="button button--primary button--primary-light button--noshadow blog-sidebar-tags__link">Opinion(6)</a>
                </li>
                <li className="blog-sidebar-tags__item">
                    <a href="#" className="button button--primary button--primary-light button--noshadow blog-sidebar-tags__link">Technology(4)</a>
                </li>
            </ul>
        </div>
    );
};

export default Tags;