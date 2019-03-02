import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return(
        <form className='tc br10 ba pa2'>
            <input 
                type="search" 
                placeholder="Friend"
                onInput={searchChange}
                >

            </input>
        </form>
    );
}

export default SearchBox;


