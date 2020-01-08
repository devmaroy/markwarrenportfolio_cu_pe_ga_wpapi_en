import React from 'react';
import ArticlesFeed from './articlesFeed'; 

const BlogMain = () => {
    return (
        <div className="blog-main">
            <div className="blog-main__inner">
                <ArticlesFeed />
            </div>  
        </div>
    );
};

export default BlogMain;