import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactForm from './contactForm';
import { featuredMediaFluidPropTypes } from '../../../propTypesValues';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';


// Query
const query = graphql`
    {
        allWordpressWpContact( sort: { fields: [ date ], order: DESC }, limit: 1 ) {
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
                        form {
                            first_name
                            last_name
                            email_address
                            subject
                            message
                            button
                            required_fields
                        }
                    }
                }
            }
        }
    }
`;


class Contact extends Component {
    render() {
        const { data } = this.props;
        const { title, content, acf, featured_media } = data.allWordpressWpContact.edges[0].node;
        const form = acf.form;

        return (
            <section id="contact" className="contact divider-space">
                <div className="container">
                    <div className="contact__inner grid-container">
                        <div className="contact-info" data-aos='slide-right'>
                            <h2 
                                className="contact-info__heading" 
                                dangerouslySetInnerHTML={ { __html: title } } 
                            />
    
                            <div 
                                className="contact-info__text" 
                                dangerouslySetInnerHTML={ { __html: content } } 
                            />
    
                            <ContactForm { ...form } />
                        </div>
    
                        <div className="contact__featured" data-aos='slide-left'>
                            <div className="contact__featured-wrap">                                    
                                <Img 
                                    fluid={ featured_media.localFile.childImageSharp.fluid } 
                                    alt="Contact image" 
                                    className="contact__featured-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


Contact.propTypes = {
    data: PropTypes.shape({
        allWordpressWpContact: PropTypes.shape({
            edges: PropTypes.arrayOf(PropTypes.shape({
                node: PropTypes.shape({
                    title: PropTypes.string.isRequired,
                    content: PropTypes.string.isRequired,
                    ...featuredMediaFluidPropTypes,
                    acf: PropTypes.shape({
                        form: PropTypes.shape({
                            first_name: PropTypes.string.isRequired,
                            last_name: PropTypes.string.isRequired,
                            email_address: PropTypes.string.isRequired,
                            subject: PropTypes.string.isRequired,
                            message: PropTypes.string.isRequired,
                            required_fields: PropTypes.array.isRequired,
                        }).isRequired,
                    }).isRequired,
                }).isRequired,
            })).isRequired,
        }).isRequired,
    }).isRequired,
};


export default ( props ) => {
    return <StaticQuery query={ query } render={ ( data ) => <Contact data={ data } { ...props } /> }  />
}
