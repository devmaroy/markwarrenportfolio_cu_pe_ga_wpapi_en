import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Heading from '../common/heading';
import Img from 'gatsby-image';


// Query 
const query = graphql`
    {
        allWordpressWpAbout( sort: { fields: [ date ], order: DESC }, limit: 1 ) {
            edges {
                node {
                    title
                    content
                    featured_media {
                        localFile {
                            childImageSharp {
                                fluid( maxWidth: 1200, quality: 100 ) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    acf {
                        about_technologies
                    }
                }
            }
        }
    }
`;


const About = ( { data } ) => {
    const { title, content, acf, featured_media } = data.allWordpressWpAbout.edges[0].node;
    const technologies = acf.about_technologies.split( ',' );
    
    return (
        <section id="about" className="about divider-space">
            <div className="container">
                <div className="about__inner grid-container">
                    <Heading main="Just a Little" sub="About" />

                    <div className="about__featured">
                        <div className="about__featured-wrap">                                    
                            <Img 
                                fluid={ featured_media.localFile.childImageSharp.fluid } 
                                alt="About image" 
                                className="about__featured-img"
                            />
                        </div>
                    </div>

                
                    <div className="about-info">
                        <h3 className="about-info__heading">{ title }</h3>

                        <div className="about-info__text" dangerouslySetInnerHTML={ { __html: content } } />

                        {
                            acf.about_technologies && (
                                <div className="about-info__technologies">
                                    <h4 className="about-info__technologies-heading">Technologies I use</h4>
                                    <ul className="about-info__technologies-list">
                                        {
                                            technologies.map( ( technology, i ) => (
                                                <li key={ i }>{ technology.trim() }</li>
                                            ))
                                        }
                                    </ul>
                                </div>  
                            )
                        }     
                    </div>
                </div>
            </div>
        </section>
    )
};


About.propTypes = {
    data: PropTypes.shape({
        allWordpressWpAbout: PropTypes.shape({
            edges: PropTypes.arrayOf(PropTypes.shape({
                node: PropTypes.shape({
                    title: PropTypes.string.isRequired,
                    content: PropTypes.string.isRequired,
                    featured_media: PropTypes.shape({
                        localFile: PropTypes.shape({
                            childImageSharp: PropTypes.shape({
                                fluid: PropTypes.object.isRequired
                            }).isRequired
                        }).isRequired
                    }).isRequired,
                    acf: PropTypes.shape({
                        about_technologies: PropTypes.string.isRequired
                    }).isRequired,
                }).isRequired,
            })).isRequired,
        }).isRequired,
    }).isRequired,
};


export default ( props ) => (
    <StaticQuery query={ query } render={ ( data ) => <About data={ data } { ...props } /> } />
)