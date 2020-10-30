import React from 'react';
// import '../App.css';
import { Button } from './Button'
import Destination from './pages/Destination';
import Register from './pages/Register'


function Body() {
  return (
    <div className='body'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Your Adventure Starts Here</h1>
      <p>wŏn'dər-lŭst': An impulse, longing, or urge to wander or travel.</p>
      <div className='button-container'>
        <Button className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          to='/Register'
        >
          Register <i class="fas fa-plane-departure"></i>
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={Destination}
        >
          Log In <i class="fas fa-plane-arrival"></i>
        </Button>
      </div>
    </div>
  );
}

export default Body;