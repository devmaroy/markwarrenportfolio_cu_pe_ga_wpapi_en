import React from 'react';

const instagramFeed = () => {
    return (
        <div>
            offline
        </div>
    );
};

export default instagramFeed;

/*import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import SlickSlider from 'react-slick';
import Heading from '../common/heading';
import InstagramFeedItem from '../common/instagramFeedItem';


const query = graphql`
    {
        allInstaNode( limit: 9 ) {
            edges {
                node {
                    id
                    localFile {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
`;


const InstagramFeed = ( { data } ) => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        customPaging: function(i) {
            return (
                <button></button>
            );
        },
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
            },
            {
              breakpoint: 720,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            }
        ],
    };

    const instagramFeed = data.allInstaNode.edges;

    return (
        <section className="instagram-feed divider-space">
            <div className="container">
                <Heading main="Follow Me" sub="Instagram" /> 
            </div>
            
            <div className="instagram-feed__inner">
                <SlickSlider { ...sliderSettings }>
                    {
                        instagramFeed.map(( { node: feedItem } ) => (
                            <InstagramFeedItem 
                                key={ feedItem.id }
                                id={ feedItem.id }
                                imgSrc={ feedItem.localFile.childImageSharp.fluid } 
                                imgAlt="Instagram feed" 
                            />
                        ))
                    }
                </SlickSlider>
            </div>
        </section>
    )
}


export default ( props ) => (
    <StaticQuery query={ query } render={ ( data ) => <InstagramFeed data={ data } { ...props } /> } />
)


InstagramFeed.propTypes = {
    data: PropTypes.shape({
        allInstaNode: PropTypes.shape({
            edges: PropTypes.arrayOf(PropTypes.shape({
                node: PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    localFile: PropTypes.shape({
                        childImageSharp: PropTypes.shape({
                            fluid: PropTypes.object.isRequired
                        }).isRequired
                    }).isRequired,
                }).isRequired,
            })).isRequired,
        }).isRequired,
    }).isRequired,
};*/