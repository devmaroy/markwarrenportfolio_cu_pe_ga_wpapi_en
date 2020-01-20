import React from 'react';
import LayoutBlog from '../layout/base/layoutBlog';
import ArticleFeedItem from '../components/blog/main/articleFeedItem';
import Pagination from '../components/common/pagination';


const TaxonomyBaseTemplate = ( { info, content, currentPage, numPages } ) => {
    const { type, slug, name } = info;

    return (
        <LayoutBlog>
            <h2 
                className="taxonomy-heading"
            >
                Browsing { type }: <strong dangerouslySetInnerHTML={ { __html: name } } />
            </h2>

            {
                content.map( ( { node: content } ) => (
                    <ArticleFeedItem key={ content.id } { ...content } />
                ))
            }

            <Pagination 
                numberOfPages={ numPages }
                currentPage={ currentPage }
                prefix={ `/${ type }/${ slug }` }
            />
        </LayoutBlog>
    )
};


export default TaxonomyBaseTemplate;