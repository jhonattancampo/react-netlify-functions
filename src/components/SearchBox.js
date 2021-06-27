import React from "react";

const SearchBox = ({ searchfield, searchChange}) => {
    return(
        <div className='pa2 bb-ns pa4 b--silver'>
            <input
                className='pa3 ba b--purple bg-near-white'
                type='search'
                placeholder='search friends'
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;