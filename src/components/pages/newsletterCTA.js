import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import CTA from '../common/cta';


// Query
const query = graphql`
    {
        allWordpressWpNewsletterCta( sort: { fields: [ date ], order: DESC }, limit: 1 ) {
            edges {
                node {
                    title
                    content
                    acf {
                        form {
                            email_address
                            button
                        }
                    }
                }
            }
        }   
    }
`;


const NewsletterCTA = ( { data } ) => {
    const { title, content: text, acf } = data.allWordpressWpNewsletterCta.edges[0].node;
    const { email_address, button } = acf.form; 

    return (
        <CTA title={ title } text={ text }>
            <form className="newsletter-form">
                <div className="newsletter-form__group">
                    <input type="email" className="newsletter-form__control" placeholder={ email_address } />
                    <button className="newsletter-form__control newsletter-form__button">{ button }</button>                        
                </div>
            </form>
        </CTA>
    )
}


NewsletterCTA.propTypes = {
    data: PropTypes.shape({
        allWordpressWpNewsletterCta: PropTypes.shape({
            edges: PropTypes.arrayOf(PropTypes.shape({
                node: PropTypes.shape({
                    title: PropTypes.string.isRequired,
                    content: PropTypes.string.isRequired,
                    acf: PropTypes.shape({
                        form: PropTypes.shape({
                            email_address: PropTypes.string.isRequired,
                            button: PropTypes.string.isRequired,
                        }).isRequired
                    }).isRequired,
                }).isRequired,
            })).isRequired,
        }).isRequired,
    }).isRequired,
};


export default ( props ) => (
    <StaticQuery query={ query } render={ ( data ) => <NewsletterCTA data={ data } { ...props } /> } />
)