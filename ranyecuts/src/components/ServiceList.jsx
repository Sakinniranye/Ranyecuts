import React from 'react';

const services = [
  { name: 'Adult Hairline w Face', price: 20 },
  { name: 'Adult Taper/w Line up', price: 35 },
  { name: 'Adult Haircut w Face', price: 40 },
  { name: 'Kids Haircut (age 3-12)', price: 20 },
  { name: 'Teen BASIC Haircut (age 13-18)', price: 30 },
  { name: 'Teen Exclusive Haircut', price: 30 },
  { name: 'Charcoal Face Mask w Haircuts', price: 5 },
  { name: 'Hot Towel', price: 5 },
  { name: 'Senior Citizen Cuts/ Military', price: 30 }
];

// Mock time slots (in a real app, you’d generate based on date & service)
const mockTimeSlots = [
  "9:00 AM", "10:30 AM", "12:00 PM", "1:30 PM", "3:00 PM", "4:30 PM"
];

const ServiceList = ({ selectedDate, selectedTimes, onTimeSelect }) => {
  return (
    <div className="service-list">
      {services.map((service, index) => (
        <div className="service-item" key={index}>
          <div className="service-info">
            <h4>{service.name}</h4>
            <span className="appointments">0 appointments</span>
          </div>

          <div className="dropdown-group">
            <select
              className="time-dropdown"
              value={selectedTimes[service.name] || ''}
              onChange={(e) => onTimeSelect(service.name, e.target.value)}
            >
              <option value="">Select Time</option>
              {mockTimeSlots.map((time, idx) => (
                <option key={idx} value={time}>{time}</option>
              ))}
            </select>
            <span className="price">${service.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
