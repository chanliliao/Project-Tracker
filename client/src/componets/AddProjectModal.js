import React, { useState } from 'react';

// import for materialize css
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

const AddProjectModal = () => {
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [problem, setProblem] = useState('');
  const [message, setMessage] = useState('');

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
              value={problem}
              className='browser-default'
              onChange={(e) => setProblem(e.target.value)}
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
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '75%',
};

export default AddProjectModal;
