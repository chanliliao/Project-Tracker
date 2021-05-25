import React, { useContext } from 'react';
import Moment from 'react-moment';

// context
import LogsContext from '../context/logs/logsContext';

// import materialize css
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

const Log = ({ log }) => {
  // initialized context
  const logsContext = useContext(LogsContext);
  const { deleteLog } = logsContext;

  // destructure from logs
  const { _id, project, type, createdOn, message } = log;

  // ondelete function when delete button is click
  const onDelete = () => {
    deleteLog(_id);
    M.toast({ html: 'Log deleted' });
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
        Date Created:
        <Moment className='gray-text' format=' MMMM Do YYYY, h:mm:ss a'>
          {createdOn}
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

export default Log;
