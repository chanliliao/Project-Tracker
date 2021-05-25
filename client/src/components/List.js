import React, { useEffect, useContext } from 'react';

// context
import ListContext from '../context/list/listContext';

// components
import ListItem from './ListItem';
import Preloader from '../layout/Preloader';

const List = ({ match }) => {
  // grab data
  const keyword = match.params.keyword;

  // initialized context
  const listContext = useContext(ListContext);
  const { _id, list, loading, getList, listItemDeleted, deleteRest } =
    listContext;

  // first time when page starts
  useEffect(() => {
    getList(keyword);
    if (listItemDeleted) {
      deleteRest();
    }
    eslint - disable - next - line;
  }, [keyword, loading, listItemDeleted]);

  console.log(loading);

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
        list.map((listItem) => <ListItem listItem={listItem} key={_id} />)
      )}
    </ul>
  );
};

export default List;
