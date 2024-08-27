// Team.js
import React from 'react';
import './Team.css';

const Team = ({ className, children }) => {
  return (
    <div className={`team-card ${className}`}>
      {children}
    </div>
  );
};

export default Team;