import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import SearchForm from './searchForm';
import SearchResults from './searchResults';



// Search Query 
const searchQuery = graphql`
    query SearchIndexQuery {
        siteSearchIndex {
            index
        }
    }
`;


const Search = ( { data } ) => {
    const searchIndex = data.siteSearchIndex.index;

    return (
        <div className="blog-sidebar-search">
            <SearchForm searchIndex={ searchIndex } placeholder="Search ...">
                { ( searchResults ) => (
                    <SearchResults { ...searchResults } />
                )}
            </SearchForm>
        </div>
    )
};


Search.propTypes = {
    data: PropTypes.shape({
        siteSearchIndex: PropTypes.shape({
            index: PropTypes.object.isRequired,
        }).isRequired,
    }).isRequired,
};


export default ( { props } ) => (
    <StaticQuery query={ searchQuery } render={ ( data ) => <Search data={ data } { ...props } /> } />
)