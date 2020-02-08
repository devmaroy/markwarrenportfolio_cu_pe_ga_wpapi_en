import React from 'react';
import PropTypes from 'prop-types';
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


const AvailableCTA = ( { data } ) => {
    const { title, content: text, acf } = data.allWordpressWpAvailableCta.edges[0].node;
    const { button } = acf; 

    return (
        <CTA title={ title } text={ text }>
            <button className="button button--secondary">{ button }</button>
        </CTA>
    )
};


AvailableCTA.propTypes = {
    data: PropTypes.shape({
        allWordpressWpAvailableCta: PropTypes.shape({
            edges: PropTypes.arrayOf(PropTypes.shape({
                node: PropTypes.shape({
                    title: PropTypes.string.isRequired,
                    content: PropTypes.string.isRequired,
                    acf: PropTypes.shape({
                        button: PropTypes.string.isRequired
                    }).isRequired,
                }).isRequired,
            })).isRequired,
        }).isRequired,
    }).isRequired,
};


export default ( props ) => {
    return <StaticQuery query={ query } render={ ( data ) => <AvailableCTA data={ data } { ...props } /> }  />
}