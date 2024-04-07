import React, { useState } from 'react';
import './App.css';
import Modal from 'react-modal';
import SelfiePage from './SelfiePage';


function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSport, setSelectedSport] = useState(null);
  const [isJoinButtonHovered, setIsJoinButtonHovered] = useState(false);
  const [isJoinButtonClicked, setIsJoinButtonClicked] = useState(false);


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSportClick = (sport) => {
    setSelectedSport(sport);
  };
  const handleJoinButtonHover = () => {
    setIsJoinButtonHovered(true);
  };

  const handleJoinButtonLeave = () => {
    setIsJoinButtonHovered(false);
  };

  const handleJoinButtonClick = () => {
    setIsJoinButtonClicked(true);
    // Show pop-up message here
    alert('You earned 50 points!');
  };

  




  return (
    <div className='root'>
      <h1>It's time for Apex!</h1>
      <h2>Join a group!</h2>

     
      <div className="row">
        <div className="card swimming" onClick={() => handleSportClick('swimming')}>
          <h3>🏊‍♂️ Swimming Club</h3>
        </div>
        <div className="card running" onClick={() => handleSportClick('running')}>
          <h3>🏃‍♂️ Running Club</h3>
        </div>
      </div>
      <div className="row">
        <div className="card cycling" onClick={() => handleSportClick('cycling')}>
          <h3>🚴‍♂️ Cycling Club</h3>
        </div>
        <div className="card weightlifting" onClick={() => handleSportClick('hiking')}>
          <h3>🏔️ Hiking Club</h3>
        </div>
      </div>
      <div className="row">
        <div className="card football" onClick={() => handleSportClick('football')}>
          <h3>⚽️ Football Club</h3>
        </div>
        <div className="card tennis" onClick={() => handleSportClick('tennis')}>
          <h3>🎾 Tennis Club</h3>
        </div>
      </div>
      {selectedSport && <SelfiePage sport={selectedSport} />}
      
      <button onClick={openModal} className='create-button'>+ Create Group</button>
      <Modal
  isOpen={isModalOpen}
  onRequestClose={closeModal}
  overlayClassName="modal-overlay"
  className="modal"
  contentLabel="Example Modal"
>
  <h2 className="modal-title">Create Group</h2>
  <button className="modal-close-button" onClick={closeModal}>X</button>
  <div className="modal-content">
      {/* Emoji Picker */}
          {/* Group Name Input */}
          <div className="form-group">
            <label htmlFor="groupName" >Group Name:</label>
            <input type="text" id="groupName" name="groupName" />
          </div>
          {/* Notification Frequency Options */}
    <div className="form-group">
      <label htmlFor="notificationFrequency">Notification Frequency:</label>
      <select id="notificationFrequency" name="notificationFrequency">
        <option value="everyday">Everyday</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
    </div>
    <div className="continue-button-container">
      <button className="continue-button">Continue</button>
    </div>
  </div>
  
</Modal>
    </div>
  );
}

export default App;
