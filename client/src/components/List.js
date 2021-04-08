import React, { useEffect, useContext } from 'react';

// context
import ListContext from '../context/list/listContext';

// components
import ListItem from './ListItem';
import Preloader from '../layout/Preloader';

const List = () => {
  // initialized context
  const listContext = useContext(ListContext);
  const { id, list, loading, getList } = listContext;

  // first time when page starts
  useEffect(() => {
    getList();
    // eslint-disable-next-line
  }, []);

  // if there is a delay on getting the data
  if (loading || list === null) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>Project List</h4>
      </li>
      {!loading && list.length === 0 ? (
        <p className='center'>No list to show...</p>
      ) : (
        list.map((listItem) => <ListItem listItem={listItem} key={id} />)
      )}
    </ul>
  );
};

export default List;
