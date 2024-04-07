import React, { useState } from 'react';


function CreateGroupPopup({ onClose }) {
  const [groupName, setGroupName] = useState('');
  const [notifications, setNotifications] = useState({
    daily: false,
    weekly: false,
    never: false,
  });

  const handleGroupNameChange = (e) => {
    setGroupName(e.target.value);
  };

  const handleNotificationChange = (type) => {
    setNotifications((prevNotifications) => ({
      ...prevNotifications,
      [type]: !prevNotifications[type],
    }));
  };

  const handleContinue = () => {
    // Handle continue action
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <div className="popup-header">
          <button className="close-button" onClick={onClose}>X</button>
        </div>
        <div className="popup-body">
          <div className="emoji-picker">
          </div>
          <input
            type="text"
            value={groupName}
            onChange={handleGroupNameChange}
            placeholder="Enter group name"
          />
          <div className="notification-question">Receive notifications?</div>
          <div className="notification-options">
            <div>
              <input
                type="checkbox"
                checked={notifications.daily}
                onChange={() => handleNotificationChange('daily')}
              />
              <label>Every day</label>
            </div>
            <div>
              <input
                type="checkbox"
                checked={notifications.weekly}
                onChange={() => handleNotificationChange('weekly')}
              />
              <label>Weekly</label>
            </div>
            <div>
              <input
                type="checkbox"
                checked={notifications.never}
                onChange={() => handleNotificationChange('never')}
              />
              <label>Never</label>
            </div>
          </div>
        </div>
        <div className="popup-footer">
          <button onClick={onClose}></button>
          <button onClick={handleContinue}>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default CreateGroupPopup;
