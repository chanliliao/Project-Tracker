import React from 'react';

const SearchBar = () => {
  return (
    <nav style={{ marginBottom: '50px', backgroundColor: '#26a69a' }}>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input type='search' id='search' placeholder='Search Projects...' />
            <label htmlFor='search' className='label-icon'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
