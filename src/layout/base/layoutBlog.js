import React from 'react';
import Layout from './layout';
import BlogSidebar from '../../components/blog/sidebar/sidebar';
import Heading from '../../components/common/heading';


const LayoutBlog = ( { children } ) => {
    return (
        <Layout>
            <div className="blog">
                <div className="container">
                    <div className="blog__inner grid-container grid-container--blog">
                        <Heading main="All My Articles" sub="Blog" />
                        
                        <div className="blog-main">
                            { children }
                        </div>

                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </Layout>
    );
};


export default LayoutBlog;