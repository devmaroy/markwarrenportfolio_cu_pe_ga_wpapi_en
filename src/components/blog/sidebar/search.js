import React from 'react';
import SidebarForm from './form';
import searchIcon from '../../../images/icons/search.svg';


const Search = () => {
    return (
        <div className="blog-sidebar-search">
            <SidebarForm 
                inputType="email" 
                placeholder="Search ..."
            >
                <img src={ searchIcon } alt="Search icon" />
            </SidebarForm>
        </div>
    );
};


export default Search;