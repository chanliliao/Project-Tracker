import React, { useEffect, useContext } from 'react';

import ListContext from '../context/list/listContext';

import ListItem from './ListItem';
import Preloader from '../layout/Preloader';

const List = () => {
  const listContext = useContext(ListContext);
  const { list, loading, getList } = listContext;

  useEffect(() => {
    getList();
    // eslint-disable-next-line
  }, []);

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
        list.map((listItem) => (
          <ListItem listItem={listItem} key={listItem.id} />
        ))
      )}
    </ul>
  );
};

export default List;
