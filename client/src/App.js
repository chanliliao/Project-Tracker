import React, { useEffect, Fragment } from 'react';

//component
import SearchBar from './layout/SearchBar';
import Logs from './components/Logs';
import Addbtn from './layout/AddBtn';
import AddProjectModal from './components/AddProjectModal';

//context
import LogsState from './context/logs/LogsState';

//import for materialize css
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

function App() {
  useEffect(() => {
    // initializing materialize
    M.AutoInit();
  });

  return (
    <Fragment>
      <LogsState>
        <SearchBar />
        <div className='container'>
          <Addbtn />
          <AddProjectModal />
          <Logs />
        </div>
      </LogsState>
    </Fragment>
  );
}

export default App;
