import React, {Component} from 'react';


const SearchBar = (props) => {
    return (
            
            <nav className='nav-title'>
            
            <br></br>
            Search:
            <input onChange={props.handleInput} type="text"/>
            </nav>
           
    
    )
}

export default SearchBar