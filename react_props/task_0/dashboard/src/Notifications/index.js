import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils';

export const Notifications = () => {
  return (
    <div className="Notifications">
      <button
        aria-label="Close"
        onClick={() => {
          console.log('Close button has been clicked');
        }}
        style={{
          float: 'right',
          position: 'absolute',
          top: '16px',
          right: '16px',
          background: 'none',
          border: 'none',
        }}
      >
        <img src={closeIcon} alt="Close" style={{ height: '20px', width: '20px' }} />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={getLatestNotification()}></li>
      </ul>
    </div>
  );
};

export default Notifications;