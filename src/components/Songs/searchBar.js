import React, {Component} from 'react';

const SearchBar = (props) => {
    return (
            
            <nav className='nav-title'>
            <h4>Search</h4>
            Search bar
            <input onChange={props.handleInput} type="text"/>
            </nav>
           
    
    )
}

export default SearchBar