import React, { useState, useRef, useContext } from 'react';

// context
import ListContext from '../context/list/listContext';

const SearchBar = ({ history }) => {
  // const text = useRef('');

  // // initialized context
  // const listContext = useContext(ListContext);
  // const { searchList } = listContext;

  // // onchange function for search
  // const onChange = () => {
  //   searchList(text.current.value);
  // };
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };

  return (
    <nav style={{ marginBottom: '50px' }} className='blue darken-4'>
      <div className='nav-wrapper'>
        <form onSubmit={submitHandler}>
          <div className='input-field'>
            <input
              type='search'
              id='search'
              placeholder='Search Projects...'
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button type='submit'>
              <label htmlFor='search' className='label-icon'>
                <i className='material-icons'>search</i>
              </label>
            </button>
            {/* <i className='material-icons'>close</i> */}
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
