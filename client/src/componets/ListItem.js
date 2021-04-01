import React from 'react';
// import Moment from 'react-moment';

// import materialize css
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

const ListItem = () => {
  const onDelete = () => {};

  return (
    <li className='collection-item'>
      <div>
        <a href='' className='blue-text'>
          Project 1
        </a>
        <br />
        <span className='red-text'>Bugs:</span> 4
        <br />
        <span className='green-text'>Functions:</span> 3
        <br />
        last updated:
        {/* <Moment format='MMMM Do YYYY, h:mm:ss a'>{date}</Moment> */}
        <a href='#!' onClick={onDelete} className='secondary-content'>
          <i className='material-icons'>delete</i>
        </a>
      </div>
    </li>
  );
};

export default ListItem;
