import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
    const onsearchValueChange = (event) => {
        console.log(event.target.value);

    }
    return (
        <input
            className='TodoSearch'
            placeholder="Cebolla"
            onChange={onsearchValueChange}
        />
    )
}

export { TodoSearch };