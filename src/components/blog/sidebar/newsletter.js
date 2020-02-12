import React from 'react';
import SidebarHeading from './sidebarHeading';
import Newsletter from '../../common/newsletter';


const NewsletterSidebar = () => {
    return (
        <div className="blog-sidebar-newsletter">
            <SidebarHeading heading="Stay in touch" /> 

            <Newsletter variant="primary" placeholder="Email Address" buttonText="Subscribe" />
        </div>
    );
};


export default NewsletterSidebar;