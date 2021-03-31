import React from 'react';

import ListItem from './ListItem';

const List = () => {
  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>Project List</h4>
      </li>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </ul>
  );
};

export default List;
