import React, { useRef, useContext } from 'react';

import ListContext from '../context/list/listContext';

const SearchBar = () => {
  const text = useRef('');
  const listContext = useContext(ListContext);
  const { searchList } = listContext;

  const onChange = () => {
    searchList(text.current.value);
  };
  return (
    <nav style={{ marginBottom: '50px' }} className='blue darken-4'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              type='search'
              id='search'
              placeholder='Search Projects...'
              ref={text}
              onChange={onChange}
            />
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
