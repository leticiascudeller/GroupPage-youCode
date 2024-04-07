// SelfiePage.js
import React from 'react';
import './SelfiePage.css';

// Import the images for different sports
import swimmingSelfie1 from './images/swimming-selfie1.png';
import swimmingSelfie2 from './images/swimming-selfie2.png';
import runningSelfie1 from './images/running-selfie1.png';
import runningSelfie2 from './images/running-selfie2.png';
import cyclingSelfie1 from './images/cycling-selfie1.png';
import cyclingSelfie2 from './images/cycling-selfie2.png';
import footballSelfie1 from './images/football-selfie1.png';
import footballSelfie2 from './images/football-selfie2.png';
import tennisSelfie1 from './images/tennis-selfie1.jpeg';
import tennisSelfie2 from './images/tennis-selfie2.png';
import hikingSelfie1 from './images/hiking-selfie1.jpeg';
import hikingSelfie2 from './images/hiking-selfie2.jpeg';

function SelfiePage({ sport }) {
  let selfies = [];

  // Populate selfies array based on the selected sport
  if (sport === 'swimming') {
    selfies = [
      { id: 1, image: swimmingSelfie1, user: '@rafael01_', description: 'Practicing swimming 🏊‍♂️' },
      { id: 2, image: swimmingSelfie2, user: '@emily655', description: 'Enjoying the pool!' },
      // Add more swimming selfies here
    ];
  } else if (sport === 'running') {
    selfies = [
      { id: 3, image: runningSelfie1, user: '@nadine87', description: 'Running in the park 🏃🏻‍♀️‍➡️🏃🏻‍♀️‍➡️' },
      { id: 4, image: runningSelfie2, user: '@sigma_john', description: 'Morning jog #sigma' },
      // Add more running selfies here
    ];
  } else if (sport === 'cycling') {
    selfies = [
      { id: 5, image: cyclingSelfie1, user: '@george_123', description: 'Cycling in the countryside today!' },
      { id: 6, image: cyclingSelfie2, user: '@margaret_1950', description: 'Biking adventure 💅🏼' },
      // Add more cycling selfies here
    ];
  } else if (sport === 'football') {
    selfies = [
      { id: 7, image: footballSelfie1, user: '@lia_player', description: 'go Tbirds!' },
      { id: 8, image: footballSelfie2, user: '@neymar_2', description: 'Goal celebration 🔥' },
      // Add more football selfies here
    ];
  } else if (sport === 'tennis') {
    selfies = [
      { id: 9, image: tennisSelfie1, user: '@smith965', description: 'Tennis match at the court 😄' },
      { id: 10, image: tennisSelfie2, user: '@nina_tennis', description: 'I am the winner, im the best 😜' },
      // Add more tennis selfies here
    ];
  } else if (sport === 'hiking') {
    selfies = [
      { id: 11, image: hikingSelfie1, user: '@linda_12', description: 'Hiking in the mountains of Peru 😇' },
      { id: 12, image: hikingSelfie2, user: '@cooper_family', description: 'Exploring nature trails with family 🥰' },
      // Add more hiking selfies here
    ];
  }

  return (
    <div className="selfie-page">
      <h1>📸 Fitness Moments</h1>
      <div className="selfie-container">
        {selfies.map((selfie) => (
          <div key={selfie.id} className="selfie-card">
            <img src={selfie.image} alt={selfie.description} />
            <div className="selfie-details">
              <p className="user-name">{selfie.user}</p>
              <p className="description">{selfie.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelfiePage;
