import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
    // Creacion del estado
    const [searchValue, setSearchValue] = React.useState('');

    const onsearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);

    }
    return [
        <input
            className='TodoSearch'
            placeholder="Cebolla"
            value={searchValue}
            onChange={onsearchValueChange}
        />,
        <p>{searchValue}</p>

    ];
    //(
    //     <input
    //         className='TodoSearch'
    //         placeholder="Cebolla"
    //         value={searchValue}
    //         onChange={onsearchValueChange}
    //     />,
    //     <p>{searchValue}</p>
    // )
}

export { TodoSearch };