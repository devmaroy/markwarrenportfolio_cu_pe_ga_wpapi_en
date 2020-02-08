import React from 'react';
import PropTypes from 'prop-types';
import LayoutBlog from '../layout/base/layoutBlog';
import FeedItem from '../components/common/feedItem';
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
                    <FeedItem key={ content.id } { ...content } />
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


TaxonomyBaseTemplate.propTypes = {
    info: PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
    }).isRequired,
    content: PropTypes.arrayOf( PropTypes.shape({
        node: PropTypes.shape({
            wordpress_id: PropTypes.number.isRequired,
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,                    
            slug: PropTypes.string.isRequired,                    
            date: PropTypes.string.isRequired,                    
            excerpt: PropTypes.string.isRequired,   
            categories: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                slug: PropTypes.string.isRequired,
            })).isRequired, 
            featured_media: PropTypes.shape({
                localFile: PropTypes.shape({
                    childImageSharp: PropTypes.shape({
                        fluid: PropTypes.object.isRequired
                    }).isRequired
                }).isRequired
            }).isRequired   
        }).isRequired
    }).isRequired ).isRequired,
    currentPage: PropTypes.number.isRequired,  
    numPages: PropTypes.number.isRequired,  
};


export default TaxonomyBaseTemplate;