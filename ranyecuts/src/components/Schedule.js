// Header.js
import React from 'react';
import './Schedule.css';

function Schedule() {
    return (
        <div className="service-list">
          {/* This would be mapped from state in a real app */}
          <div className="service-item">
            <span>Adult Haircut w/ Face</span>
            <span>$40</span>
          </div>
          {/* Repeat for other services */}
        </div>
      );
}

export default Schedule;