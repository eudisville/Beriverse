import React from 'react';
import './Card.css';
import Video from './videos/backvid.mp4';

const Card = () => {
  return (
    <div className='card-back'>
      <video className='video-background' autoPlay loop muted>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='content'>
      </div>
    </div>
  );
};

export default Card;
