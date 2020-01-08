import React from 'react';
import ArticlePreview from '../articlePreview';
import Pagination from '../../common/pagination';

const ArticlesFeed = () => {
    return (
        <div className="articles-feed">
            <ArticlePreview />
            <Pagination />
        </div>
    );
};

export default ArticlesFeed;