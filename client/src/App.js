import React, { useEffect, Fragment } from 'react';

// react router
import { BrowserRouter as Router, Route } from 'react-router-dom';

//component
import SearchBar from './layout/SearchBar';
import List from './components/List';
import Addbtn from './layout/AddBtn';
import AddProjectModal from './components/AddProjectModal';

//context
import ListState from './context/list/ListState';

//import for materialize css
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

function App() {
  useEffect(() => {
    // initializing materialize
    M.AutoInit();
  });

  return (
    <Router>
      <Fragment>
        <ListState>
          <SearchBar />
          <div className='container'>
            <Addbtn />
            <AddProjectModal />
            <Route path='/' component={List} exact />
            <Route path='/search/:keyword' component={List} exact />
            {/* <List /> */}
          </div>
        </ListState>
      </Fragment>
    </Router>
  );
}

export default App;
