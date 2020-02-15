import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Heading from '../common/heading';


// Query 

const query = graphql`
    {
        allWordpressWpTestimonials( sort: { fields: [ date ], order: DESC } ) {
            edges {
                node {
                    id
                    content
                    acf {
                        testimonial_icon
                        testimonial_name
                        testimonial_image {
                            source_url
                        }
                        testimonial_company
                        testimonial_job_title
                    }
                }
            }
        }
    }
`;


const Testimonials = ( { data } ) => {
    const testimonials = data.allWordpressWpTestimonials.edges;

    return (
        <section id="testimonials" className="testimonials divider-space">
            <div className="container">
                <div className="testimonials__inner grid-container">
                    <Heading main="What My Cliens Say" sub="Testimonials" />

                    {
                        testimonials.map( ( { node: testimonial } ) => {
                            return (
                                <div key={ testimonial.id } className="card card--testimonials card--onepage">
                                    <div className="card__meta">
                                        <img 
                                            className="card__icon" 
                                            src={ testimonial.acf.testimonial_icon } 
                                            alt="Services icon" 
                                        />    
                                    </div>

                                    <div 
                                        className="card__text" 
                                        dangerouslySetInnerHTML={ { __html: testimonial.content } } 
                                    />

                                    <div className="card__footer">
                                        <img 
                                            src={ testimonial.acf.testimonial_image.source_url } 
                                            alt="Testimonial person" 
                                        />

                                        <div className="card__person">
                                            <h4 
                                                className="card__person-name"
                                            >
                                                { testimonial.acf.testimonial_name }
                                            </h4>
                                                
                                            <p 
                                                className="card__person-career"
                                            >
                                                { testimonial.acf.testimonial_job_title } 

                                                { testimonial.acf.testimonial_company && (
                                                    <span> at <strong>{ testimonial.acf.testimonial_company }</strong></span>
                                                ) }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}


Testimonials.propTypes = {
    data: PropTypes.shape({
        allWordpressWpTestimonials: PropTypes.shape({
            edges: PropTypes.arrayOf(PropTypes.shape({
                node: PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    content: PropTypes.string.isRequired,
                    acf: PropTypes.shape({
                        testimonial_icon: PropTypes.string.isRequired,
                        testimonial_name: PropTypes.string.isRequired,
                        testimonial_image: PropTypes.shape({
                            source_url: PropTypes.string.isRequired,
                        }).isRequired,
                        testimonial_company: PropTypes.string.isRequired,
                        testimonial_job_title: PropTypes.string.isRequired,
                    }).isRequired,
                }).isRequired,
            })).isRequired,
        }).isRequired,
    }).isRequired,
};


export default ( props ) => (
    <StaticQuery query={ query } render={ ( data ) => <Testimonials data={ data } { ...props } /> } />
)