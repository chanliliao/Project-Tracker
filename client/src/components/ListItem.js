import React, { useContext } from 'react';
import Moment from 'react-moment';

// context
import ListContext from '../context/list/listContext';

// import materialize css
import 'materialize-css/dist/css/materialize.min.css';

const ListItem = ({ listItem }) => {
  // initialized context
  const listContext = useContext(ListContext);
  const { deleteListItem } = listContext;

  // destructure from iist item
  const { _id, project, type, date, message } = listItem;

  // ondelete function when delete button is click
  const onDelete = () => {
    deleteListItem(_id);
  };

  return (
    <li className='collection-item'>
      <div>
        <a href='' className='blue-text'>
          {project}
        </a>
        <br />
        <span className='red-text'>Type:</span> {type}
        <br />
        <span className='green-text'>Message:</span> {message}
        <br />
        last updated:
        <Moment className='gray-text' format=' MMMM Do YYYY, h:mm:ss a'>
          {date}
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
