import React, { useEffect, Fragment } from 'react';

// component input
import SearchBar from './layout/SearchBar';
import List from './componets/List';
import Addbtn from './layout/AddBtn';
import AddProjectModal from './componets/AddProjectModal';

//context
import ListState from './context/list/ListState';

// import for materialize css
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

function App() {
  useEffect(() => {
    // initializing materialize
    M.AutoInit();
  });

  return (
    <Fragment>
      <ListState>
        <SearchBar />
        <div className='container'>
          <Addbtn />
          <AddProjectModal />
          <List />
        </div>
      </ListState>
    </Fragment>
  );
}

export default App;
