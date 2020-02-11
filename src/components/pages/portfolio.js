/*import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { taxonomyPropTypes, featuredMediaFluidPropTypes } from '../../propTypesValues';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Heading from '../common/heading';
import addIcon from '../../images/icons/add.svg';
import Isotope from 'isotope-layout';


// Query
const query = graphql`
    {
        allWordpressWpPortfolioTags {
            edges {
                node {
                    id
                    name
                    slug
                }
            }
        }
        allWordpressWpPortfolio( sort: { fields: [date], order: DESC } ) {
            edges {
                node {
                    id
                    title
                    content
                    portfolio_tags {
                        id
                        name
                        slug
                    }
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
                        url
                    }
                }
            }
        }
    }
`;


class Portfolio extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            active: 'all',
            page: 1,
            portfolioItemsPerLoad: 6,
        }
    }

    componentDidMount() {
        if ( typeof window !== 'undefined' ) {
            // The elements are in the DOM, initialize a shuffle instance.
            this.iso = new Isotope( '.portfolio__items', {
                // options
                itemSelector: '.portfolio__item',
                masonry: {
                    columnWidth: 1,
                    gutter: 1
                }
            });
        }
    }

    componentDidUpdate( prevProps, prevState ) {
        if ( typeof window !== 'undefined' && ( prevState.page !== this.state.page ) ) {
            // This means that we want to load more portfolio items
            // And because isotope now doesn't know about new items we need to reinitialize again
            this.iso.destroy();

            this.iso = new Isotope( '.portfolio__items', {
                // options
                itemSelector: '.portfolio__item',
                masonry: {
                    columnWidth: 1,
                    gutter: 1
                }
            });
        }
    }

    componentWillUnmount() {
        if ( typeof window !== 'undefined' ) {
            // Remove isotope
            this.iso.destroy();
            this.iso = null;
        }
    }

    filterItems = ( filterValue ) => {
        this.iso.arrange( { filter: `.${ filterValue }` } );
        this.setState( () => ( { active: filterValue } ) );
    }

    loadMorePortfolioItems = () => {
        this.setState( ( { page } ) => ( { page: page + 1 } ) );
    }

    render() {
        const { data } = this.props;
        const portfolioTags = data.allWordpressWpPortfolioTags.edges;
        const portfolioItems = data.allWordpressWpPortfolio.edges;
        const { page, portfolioItemsPerLoad } = this.state;

        const totalPages = Math.ceil( portfolioItems.length / portfolioItemsPerLoad );
        const paginatedPortfolioItems = portfolioItems.slice( 0, page * portfolioItemsPerLoad );
        
        return (
            <section id="portfolio" className="portfolio divider-space">
                <div className="container">
                    <div className="portfolio__inner">
                        <Heading main="My Latest Projects" sub="Portfolio" />

                        <ul className="portfolio__navigation">
                            {
                                portfolioTags.map( ( { node: portfolioTag } ) => (
                                    <li key={ portfolioTag.id }>
                                        <button 
                                            className={ this.state.active === portfolioTag.slug ? 'portfolio__navigation-link active' : 'portfolio__navigation-link' } 
                                            onClick={ () => this.filterItems( portfolioTag.slug ) }
                                            data-filter={ portfolioTag.slug }
                                        >
                                            { portfolioTag.name }
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>

                        <div className="portfolio__items">
                            {
                                paginatedPortfolioItems.map( ( { node: portfolioItem } ) => {                                      
                                    const className = [ 'portfolio__item', ...portfolioItem.portfolio_tags.map( ( { slug } ) => slug ) ].join(' ');
            
                                    return (
                                        <div key={ portfolioItem.id } { ...{ className } }>
                                            <a href={ portfolioItem.acf.url }>
                                                <Img 
                                                    fluid={ portfolioItem.featured_media.localFile.childImageSharp.fluid } 
                                                    alt="Portfolio project" 
                                                    className="portfolio__img"
                                                />

                                                <div className="portfolio__overlay">
                                                    <div className="portfolio__overlay-header">
                                                        <img src={ addIcon } className="portfolio__icon" alt="Add icon" />
                                                    </div>
                    
                                                    <div className="portfolio__overlay-content">
                                                        <h3 
                                                            className="portfolio__heading"
                                                            dangerouslySetInnerHTML={ { __html: portfolioItem.title } }
                                                        />
                                                        <div 
                                                            className="portfolio__text" 
                                                            dangerouslySetInnerHTML={ { __html: portfolioItem.content } } 
                                                        />
                                                    </div>
                                                </div>
                                            </a>    
                                        </div>  
                                    )
                                })
                            }                                    
                        </div>

                        <div className="portfolio__meta">
                            {
                                ! ( page === totalPages ) && (
                                    <button 
                                        className="button button--primary"
                                        onClick={ this.loadMorePortfolioItems }
                                    >
                                        Load more
                                    </button>
                                )   
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


Portfolio.propTypes = {
    data: PropTypes.shape({
        allWordpressWpPortfolioTags: PropTypes.shape({
            edges: PropTypes.arrayOf(PropTypes.shape({
                node: PropTypes.shape({
                    ...taxonomyPropTypes,
                }).isRequired,
            })).isRequired,
        }).isRequired,
        allWordpressWpPortfolio: PropTypes.shape({
            edges: PropTypes.arrayOf(PropTypes.shape({
                node: PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    title: PropTypes.string.isRequired,
                    content: PropTypes.string.isRequired,
                    portfolio_tags: PropTypes.arrayOf(PropTypes.shape({
                        ...taxonomyPropTypes,
                    })).isRequired,
                    ...featuredMediaFluidPropTypes,
                    acf: PropTypes.shape({
                        url: PropTypes.string.isRequired
                    }).isRequired,
                }).isRequired,
            })).isRequired,
        }).isRequired,
    }).isRequired,
};


export default ( props ) => (
    <StaticQuery query={ query } render={ ( data ) => <Portfolio data={ data } { ...props } /> } />
)*/

import React from 'react';

const portfolio = () => {
    return (
        <div>
            nall is here
        </div>
    );
};

export default portfolio;