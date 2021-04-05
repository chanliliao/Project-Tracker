import React, { useEffect, Fragment } from 'react';

// component input
import SearchBar from './layout/SearchBar';
import List from './componets/List';
import Addbtn from './layout/AddBtn';
import AddProjectModal from './componets/AddProjectModal';

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
      <SearchBar />
      <div className='container'>
        <Addbtn />
        <AddProjectModal />
        <List />
      </div>
    </Fragment>
  );
}

export default App;
