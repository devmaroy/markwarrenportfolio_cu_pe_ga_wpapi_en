import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Heading from './../common/heading';


// Query

const query = graphql`
    {
        allWordpressWpServices( sort: { fields: [ date ], order: DESC } ) {
            edges {
                node {
                    id
                    title
                    content
                    acf {
                        service_icon {
                            source_url
                        }
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


const Services = () => {
    return (
        <StaticQuery query={ query } render={ ( data ) => {
            const services = data.allWordpressWpServices.edges;
            
            return (
                <section id="services" className="services divider-space">
                    <div className="container">
                        <div className="services__inner grid-container">
                            <Heading main="What I Do" sub="Services" />

                            {
                                services.map( ( { node: service }, index ) => (
                                    <div key={ service.id } className="card card--onepage">
                                        <div className="card__meta">
                                            <span className="card__number">{ ( index + 1 ).toString().padStart( 2, "0" ) }</span>
                                            <img className="card__icon" src={ service.acf.service_icon.source_url } alt="Services icon" />
                                        </div>

                                        <h3 className="card__title" dangerouslySetInnerHTML={ { __html: service.title } } />

                                        <div className="card__text" dangerouslySetInnerHTML={ { __html: service.content } } />
                                    </div> 
                                ))
                            }
                        </div>
                    </div>
                </section>
            )
        }}
        />
    );
};


export default Services;