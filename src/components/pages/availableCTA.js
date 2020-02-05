import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import CTA from '../common/cta';


// Query
const query = graphql`
    {
        allWordpressWpAvailableCta( sort: { fields: [ date ], order: DESC }, limit: 1 ) {
            edges {
                node {
                    title
                    content
                    acf {
                        button
                    }
                }
            }
        }   
    }
`;


const CareerCTA = () => {
    return (
        <StaticQuery query={ query } render={ ( data ) => {
            const { title, content: text, acf } = data.allWordpressWpAvailableCta.edges[0].node;
            const { button } = acf; 

            return (
                <CTA title={ title } text={ text }>
                    <button className="button button--secondary">{ button }</button>
                </CTA>
            )
        }} />
    );
};


export default CareerCTA;