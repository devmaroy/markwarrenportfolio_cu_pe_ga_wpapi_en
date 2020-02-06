import React from 'react';
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
                        section_headings {
                            main
                            sub
                        }
                    }
                }
            }
        }
    }
`;


const About = () => {
    return (
        <StaticQuery query={ query } render={ ( data ) => {
            const { title, content, acf, featured_media } = data.allWordpressWpAbout.edges[0].node;
            const technologies = acf.about_technologies.split( ',' );
            const sectionHeadings = acf.section_headings;

            return (
                <section id="about" className="about divider-space">
                    <div className="container">
                        <div className="about__inner grid-container">
                            <Heading main={ sectionHeadings.main } sub={ sectionHeadings.sub } />

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
        }} />
    );
};


export default About;