import React from 'react';
import searchIcon from '../../../images/icons/search.svg';

const Search = () => {
    return (
        <div className="blog-sidebar-search">
            <form className="sidebar-form">
                <div className="sidebar-form__group">
                    <input type="text" className="sidebar-form__control" placeholder="Search ..." />
                    <button className="sidebar-form__control sidebar-form__button">
                        <img src={ searchIcon } alt="Search icon"/>
                    </button>                        
                </div>
            </form>
        </div>
    );
};

export default Search;