import React from 'react';
import PropTypes from 'prop-types';
import { featuredMediaFluidPropTypes } from '../../propTypesValues';
import { StaticQuery, graphql, Link } from 'gatsby';
import { Link as ScrollLink } from 'react-scroll';
import Img from 'gatsby-image';
import { isExternalLink } from '../../../utils/helpers/links';


// Query
const query = graphql`
    {
        allWordpressWpHero( sort: { fields: [ date ], order: DESC }, limit: 1 ) {
            edges {
                node {
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
                        main_title
                        sub_title
                        primary_button {
                            text
                            design_style
                            bp_url
                        }
                        secondary_button {
                            text
                            design_style
                            bs_url
                        }
                    }
                }
            }
        }
    }
`;


const Hero = ( { data } ) => {
    const renderLink = ( url, text, className ) => {
        if ( isExternalLink( url ) ) {
            return <a href={ url } className={ className } data-aos='slide-up'>{ text }</a>
        }  

        if ( url.includes( '#' ) ) {   
            return (
                <ScrollLink 
                    to={ url.substring( 1 ) }
                    spy={ true }
                    hashSpy={ true }
                    smooth={ true }
                    duration={ 500 }
                    className={ className }
                    data-aos='slide-up'
                >
                    { text }
                </ScrollLink>
            )
        }

        return (
            <Link to={ url } className={ className }>{ text }</Link>
        )
    }

    const { content, featured_media, acf } = data.allWordpressWpHero.edges[0].node;
    const { main_title, sub_title, primary_button, secondary_button } = acf;

    const primaryButtonClass = primary_button.design_style === 'fill' ? 'button--primary' : 'button--outline-primary';
    const secondaryButtonClass = secondary_button.design_style === 'fill' ? 'button--primary' : 'button--outline-primary';;


    return (
        <section className="hero divider-space">
            <div className="container">
                <div className="hero__inner grid-container">
                    <div className="hero-info">
                            <h1 
                                className="hero-info__title" 
                                dangerouslySetInnerHTML={ { __html: main_title } } 
                                data-aos='fade-down'
                            />
                            
                            <h2 
                                className="hero-info__subtitle" 
                                dangerouslySetInnerHTML={ { __html: sub_title } } 
                                data-aos='fade-down'
                            />
    
                            <div 
                                className="hero-info__text" 
                                dangerouslySetInnerHTML={ { __html: content } } 
                                data-aos='fade-down'
                            />

                            { renderLink( primary_button.bp_url, primary_button.text, `button ${ primaryButtonClass }` ) }
                            { renderLink( secondary_button.bs_url, secondary_button.text, `button ${ secondaryButtonClass }` ) } 
                    </div>

                    <div className="hero__featured" data-aos='fade-down'>
                        <div className="hero__featured-wrap">                                   
                            <Img 
                                fluid={ featured_media.localFile.childImageSharp.fluid } 
                                alt="Hero image" 
                                className="hero__featured-img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};


Hero.propTypes = {
    data: PropTypes.shape({
        allWordpressWpHero: PropTypes.shape({
            edges: PropTypes.arrayOf(PropTypes.shape({
                node: PropTypes.shape({
                    content: PropTypes.string.isRequired,
                    ...featuredMediaFluidPropTypes,
                    acf: PropTypes.shape({
                        main_title: PropTypes.string.isRequired,
                        sub_title: PropTypes.string.isRequired,
                        primary_button: PropTypes.shape({
                            text: PropTypes.string.isRequired,
                            design_style: PropTypes.string.isRequired,
                            bp_url: PropTypes.string.isRequired,
                        }).isRequired,
                        secondary_button: PropTypes.shape({
                            text: PropTypes.string.isRequired,
                            design_style: PropTypes.string.isRequired,
                            bs_url: PropTypes.string.isRequired,
                        }).isRequired,
                    }).isRequired,
                }).isRequired,
            })).isRequired,
        }).isRequired,
    }).isRequired,
};


export default ( { props } ) => (
    <StaticQuery query={ query } render={ ( data ) => <Hero data={ data } { ... props } /> } />
)
