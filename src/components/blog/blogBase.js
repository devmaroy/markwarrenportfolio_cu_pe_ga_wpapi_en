import React from 'react';
import Heading from '../common/heading';
import BlogMain from './main/blogMain';
import BlogSidebar from './sidebar/blogSidebar';


const BlogBase = () => {
    return (
        <div className="blog">
            <div className="container">
                <div className="blog__inner grid-container">
                    <Heading main="My Latest Projects" sub="Portfolio" />
                    <BlogMain />
                    <BlogSidebar />
                </div>
            </div>
        </div>
    );
};


export default BlogBase;