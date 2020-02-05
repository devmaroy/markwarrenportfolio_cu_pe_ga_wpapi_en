import React from 'react';
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


export default Post;