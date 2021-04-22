import React, {Component} from 'react';

const SearchBar = (props) => {
    return (
            
            <div>
            <h4>Search</h4>
            Search bar
            <input onChange={props.handleInput} onKeyDown={props.handleInput} type="text"/>
            </div>
           
    
    )
}

export default SearchBar