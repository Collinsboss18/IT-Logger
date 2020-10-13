import React from 'react';

const FloatBtn = () => {
  return (
    // Fixed Action Button
    <div className='fixed-action-btn'>
      <a href={'#add-log-modal'} title='Add Log' className={'modal-trigger btn-floating waves-effect waves-light btn-large blue darken-2'}>
        {/* <i className={'large material-icon'}>add</i> */}
        <i className='fa fa-plus'></i>
      </a>
      <ul>
        <li>
          <a title='View Technicians' href={'#tech-list-modal'} className={'modal-trigger btn-floating green'}>
            {/* <i className={'large material-icon'}>person</i> */}
            <i className={'fa fa-user-secret'}></i>
          </a>
        </li>
        <li>
          <a title='Add Technician' href={'#add-tech-modal'} className={'modal-trigger btn-floating red'}>
            {/* <i className={'large material-icon'}>person_add</i> */}
            <i className={'fa fa-user-plus'}></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FloatBtn;
