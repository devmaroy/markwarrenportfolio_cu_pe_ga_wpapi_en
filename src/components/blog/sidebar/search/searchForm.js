import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Index } from 'elasticlunr';
import searchIcon from '../../../../images/icons/search.svg';


class SearchForm extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            query: '',
            results: [],
        }
    }

    getOrCreateIndex = () => {
        return this.index ? this.index : Index.load( this.props.searchIndex );
    }

    handleSearch = ( e ) => {
        const query = e.target.value;

        this.index = this.getOrCreateIndex();

        this.setState({
            query,
            results: this.index.search( query, { expand: true } )
                .map( ( { ref } ) => this.index.documentStore.getDoc( ref ) )
        });
    }

    render() {
        const { placeholder, children } = this.props;
        const { query, results } = this.state;
        const resData = { query, results };

        return (
            <React.Fragment>
                <form className="search-form">
                    <div className="search-form__group">
                        <input 
                            type="text"
                            placeholder={ placeholder }
                            value={ query }
                            onChange={ this.handleSearch }
                            className="search-form__control"
                        />

                        <button type="button" className="search-form__control search-form__button">
                            <img src={ searchIcon } alt="Form icon" />
                        </button> 
                    </div>
                </form>

                { children( resData ) }
            </React.Fragment>
        );
    }
}


SearchForm.propTypes = {
    placeholder: PropTypes.string,
    children: PropTypes.func.isRequired,
};


SearchForm.defaultProps = {
    placeholder: 'Search...'
}


export default SearchForm;