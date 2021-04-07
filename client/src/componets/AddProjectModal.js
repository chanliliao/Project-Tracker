import React, { useState, useContext } from 'react';

import ListContext from '../context/list/listContext';

// import for materialize css
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

const AddProjectModal = () => {
  const listContext = useContext(ListContext);
  const { addListItem } = listContext;

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = () => {
    if (message === '' || title === '') {
      M.toast({ html: 'Please enter a title and message' });
    } else {
      const newListItem = {
        message,
        category,
        title,
        date: new Date(),
      };

      addListItem(newListItem);

      setMessage('');
      setTitle('');
      setMessage('');
    }
  };

  return (
    <div id='add-project-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter Project</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor='title' className='active'>
              Project Title
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              name='options'
              value={category}
              className='browser-default'
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value='' disable>
                Choose your option
              </option>
              <option value='bug'>Bug</option>
              <option value='function'>Function</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Message
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue darken-4 waves-light btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '75%',
};

export default AddProjectModal;
