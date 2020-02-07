import React from 'react';
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


const Search = () => {
    return (
        <StaticQuery query={ searchQuery } render={ ( data ) => {
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
        } } />
    );
};


export default Search;