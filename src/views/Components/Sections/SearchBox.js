import React from 'react';


const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2 tc'>
      <input
        className='pa3 br3 ba b--light-purple'
        type='search'
        placeholder='Buscar por equipo'
        onChange={searchChange}
      />
  </div>
  );
}

export default SearchBox;