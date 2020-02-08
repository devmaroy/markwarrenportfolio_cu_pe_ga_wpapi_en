import React from 'react';
import PropTypes from 'prop-types';
import { DiscussionEmbed } from 'disqus-react';
import Article from './article';
import RelatedArticles from './relatedArticles';


const Post = ( props ) => {
    const disqusConfig = {
        shortname: process.env.GATSBY_DISQUS_NAME,
        config: { identifier: props.slug, title: props.title },
    };
 

    return (
        <div className="post">
            <div className="container">
                <div className="post__inner">
                    <Article { ...props } />

                    <div className="post__meta grid-container">
                        <DiscussionEmbed { ...disqusConfig } />

                        <h2 className="related-article__heading">Related articles</h2>

                        <RelatedArticles relatedArticles={ props.acf.related_articles } />    
                    </div>
                </div>
            </div>
        </div>
    );
};


Post.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    featured_media: PropTypes.shape({
        localFile: PropTypes.shape({
            childImageSharp: PropTypes.shape({
                fluid: PropTypes.object.isRequired
            }).isRequired
        }).isRequired
    }).isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
    })).isRequired,
    tags: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
    })).isRequired,
    acf: PropTypes.shape({
        related_articles: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    }).isRequired,
};


export default Post;