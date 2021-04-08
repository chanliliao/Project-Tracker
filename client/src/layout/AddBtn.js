import React from 'react';

// button component
const AddBtn = () => {
  return (
    <div className='fixed-action-btn'>
      <a
        href='#add-project-modal'
        className='btn-floating btn-large blue darken-4 modal-trigger'
      >
        <i className='large material-icons'>add</i>
      </a>
    </div>
  );
};

export default AddBtn;
