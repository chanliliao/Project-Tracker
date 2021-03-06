import React, { useState, useContext } from 'react';

// context
import LogsContext from '../context/logs/logsContext';

// import for materialize css
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

const AddProjectModal = () => {
  // initialized context
  const logsContext = useContext(LogsContext);
  const { addLog } = logsContext;

  // difference states on the page
  const [project, setProject] = useState('');
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');

  // onSubmit function for the form
  const onSubmit = () => {
    if (message === '' || project === '' || type === '') {
      // set pop up message
      M.toast({ html: 'Please enter project, type,  and message' });
    } else {
      // creates the form
      const newLog = {
        project,
        type,
        message,
        createdOn: new Date(),
      };

      // submits the form with function from context
      addLog(newLog);

      M.toast({ html: `Log added` });

      // reset all state
      setMessage('');
      setProject('');
      setType('');
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
              name='project'
              value={project}
              onChange={(e) => setProject(e.target.value)}
            />
            <label htmlFor='project' className='active'>
              Project Title
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              name='options'
              value={type}
              className='browser-default'
              onChange={(e) => setType(e.target.value)}
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

// custom style for the modal
const modalStyle = {
  width: '75%',
  height: '75%',
};

export default AddProjectModal;
