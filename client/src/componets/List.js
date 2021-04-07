import React, { useEffect, useContext } from 'react';

import ListContext from '../context/list/listContext';

import ListItem from './ListItem';
import Preloader from '../layout/Preloader';

const List = () => {
  const listContext = useContext(ListContext);
  const { id, list, loading, getList } = listContext;

  useEffect(() => {
    getList();
    // eslint-disable-next-line
  }, []);

  if (loading || list === null) {
    return <Preloader />;
  }

  const list1 = list[0];

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>Project List</h4>
      </li>
      {/* <ListItem listItem={list1} /> */}
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
