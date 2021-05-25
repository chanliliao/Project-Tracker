import React, { useRef, useContext } from 'react';

// context
import LogsContext from '../context/logs/logsContext';

const SearchBar = ({ history }) => {
  const text = useRef('');

  // initialized context
  const logsContext = useContext(LogsContext);
  const { searchLogs } = logsContext;

  // onchange function for search
  const onChange = (e) => {
    searchLogs(e.target.value);
  };

  return (
    <nav style={{ marginBottom: '30px' }} className='blue'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              placeholder='Search Logs...'
              ref={text}
              onChange={onChange}
            />
            <label className='label-icon' htmlFor='search'>
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
