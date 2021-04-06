import React, { useContext } from 'react';
import Moment from 'react-moment';

// context
import ListContext from '../context/list/listContext';

// import materialize css
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

const ListItem = ({ list }) => {
  const listContext = useContext(ListContext);
  const { name, category, date, message } = list;

  const onDelete = () => {};

  return (
    <li className='collection-item'>
      <div>
        <a href='' className='blue-text'>
          Project 1
        </a>
        <br />
        <span className='red-text'>Category:</span> bug
        <br />
        <span className='green-text'>Message:</span> Fix the add button
        <br />
        last updated:
        <Moment className='gray-text' format=' MMMM Do YYYY, h:mm:ss a'>
          01 19 1994
        </Moment>
        <a
          href='#!'
          onClick={onDelete}
          className='secondary-content'
          style={{ color: '#e53935 ' }}
        >
          <i className='material-icons'>delete</i>
        </a>
      </div>
    </li>
  );
};

export default ListItem;
