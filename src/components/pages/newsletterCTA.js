import React from 'react';
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


const NewsletterCTA = () => {
    return (
        <StaticQuery query={ query } render={ ( data ) => {
            const { title, content: text, acf } = data.allWordpressWpNewsletterCta.edges[0].node;
            const { email_address, button } = acf.form; 
            console.log(data);
            
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
        }} />
    );
};


export default NewsletterCTA;