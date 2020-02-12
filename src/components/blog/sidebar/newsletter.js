import React from 'react';
import SidebarHeading from './sidebarHeading';
import Newsletter from '../../common/newsletter';


const NewsletterSidebar = () => {
    return (
        <div className="blog-sidebar-newsletter">
            <SidebarHeading heading="Stay in touch" /> 

            <Newsletter />
        </div>
    );
};


export default NewsletterSidebar;