import React from 'react';
import PropTypes from 'prop-types';
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


const Contact = ( { data } ) => {
    const { title, content, acf, featured_media } = data.allWordpressWpContact.edges[0].node;
    const form = acf.form;

    return (
        <section id="contact" className="contact divider-space">
            <div className="container">
                <div className="contact__inner grid-container">
                    <div className="contact-info">
                        <h2 
                            className="contact-info__heading" 
                            dangerouslySetInnerHTML={ { __html: title } } 
                        />

                        <div 
                            className="contact-info__text" 
                            dangerouslySetInnerHTML={ { __html: content } } 
                        />

                        <form className="form">
                            {
                                
                                Object.keys( form )
                                    .filter(( field ) => field !== 'button' && field !== 'required_fields' )
                                    .map(( field ) => (
                                        <div key={ field } className="form__group">
                                            {
                                                field === 'message' ? (
                                                    <textarea 
                                                        placeholder={ form.required_fields.includes( field ) 
                                                            ? `${ form[ field ] } *` 
                                                            : form[ field ]
                                                        }
                                                        className="form__control"
                                                    ></textarea> 
                                                ) : (
                                                    <input 
                                                        type={ field === 'email_address' ? 'email' : 'text' }
                                                        placeholder={ form.required_fields.includes( field ) 
                                                            ? `${ form[ field ] } *`
                                                            : form[ field ]
                                                        }
                                                        className="form__control" 
                                                    />
                                                )
                                            }
                                        </div>
                                    ))
                            }
                        
                            <div className="form__meta">
                                <button className="button button--primary">
                                    { form[ 'button' ] }
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="contact__featured">
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
};


Contact.propTypes = {
    data: PropTypes.shape({
        allWordpressWpContact: PropTypes.shape({
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


export default ( props ) => (
    <StaticQuery query={ query } render={ ( data ) => <Contact data={ data } { ... props } /> } />
)