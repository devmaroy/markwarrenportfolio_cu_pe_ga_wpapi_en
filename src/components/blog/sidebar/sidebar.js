import React from 'react';
import Search from '../sidebar/search/search';
import RecentArticles from '../sidebar/recentArticles';
import Categories from '../sidebar/categories';
import Tags from '../sidebar/tags';
import Newsletter from '../sidebar/newsletter';
import InstagramFeed from '../sidebar/instagramFeed';


const BlogSidebar = () => {
    return (
        <div className="blog-sidebar">
            <div className="blog-sidebar__inner">
                <Search />
                <RecentArticles />
                <Categories />
                <Tags />
                <Newsletter />
                <InstagramFeed />
            </div>    
        </div>
    );
};


export default BlogSidebar;