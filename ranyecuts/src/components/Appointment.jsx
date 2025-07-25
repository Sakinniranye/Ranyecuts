import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Appointment.css';

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

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedTimes, setSelectedTimes] = useState({});
  const [confirmation, setConfirmation] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTimes = async () => {
      setLoading(true);
      const yyyyMmDd = selectedDate.toISOString().split('T')[0];
      const res = await fetch(`http://localhost:5050/api/timeslots?date=${yyyyMmDd}`);
      const data = await res.json();
      setAvailableTimes(data.slots || []);
      setSelectedTimes({});
      setExpandedCard(null);
      setLoading(false);
    };
    fetchTimes();
  }, [selectedDate]);

  // Top navigation for prev/next date
  const handlePrev = () => {
    const prev = new Date(selectedDate);
    prev.setDate(prev.getDate() - 1);
    setSelectedDate(prev);
  };
  const handleNext = () => {
    const next = new Date(selectedDate);
    next.setDate(next.getDate() + 1);
    setSelectedDate(next);
  };

  const handleTimeSelect = (service, time) => {
    setSelectedTimes(prev => ({
      ...prev,
      [service]: time
    }));
  };

  const handleBooking = async (service) => {
    if (!selectedTimes[service]) return;
    const yyyyMmDd = selectedDate.toISOString().split('T')[0];
    try {
      const res = await fetch('http://localhost:5050/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: yyyyMmDd,
          service: service,
          time: selectedTimes[service],
        }),
      });
      const data = await res.json();
      setConfirmation(`✅ Booked: ${service} at ${selectedTimes[service]} on ${yyyyMmDd}`);
      setSelectedTimes({});
      setExpandedCard(null);
      setTimeout(() => setConfirmation(null), 4000);
    } catch (error) {
      console.error('Booking failed:', error);
    }
  };

  const formattedDate = selectedDate.toLocaleDateString('en-US', {
    weekday: 'long', month: 'short', day: 'numeric', year: 'numeric',
  });

  return (
    <section className="appointment-page">
      {/* <div className="top-bar"></div> */}
      <div className="appointment-nav-row">
        <button className="nav-btn" onClick={handlePrev}>&lt; Prev Available</button>
        <button className="nav-btn" onClick={handleNext}>Next Available &gt;</button>
      </div>
      <div className="appointment-header">
        <h2>{formattedDate}</h2>
        <p>Appointment times are in Eastern Time</p>
      </div>
      <div className="appointment-content-flex">
        <div className="services-list">
          {services.map((service, idx) => (
            <div className={`service-card${expandedCard === idx ? ' expanded' : ''}`} key={service.name}>
              <div className="service-card-main" onClick={() => setExpandedCard(expandedCard === idx ? null : idx)}>
                <div>
                  <h3>{service.name}</h3>
                  <span className="appointments">0 appointments</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.1rem' }}>
                  <span className="price">${service.price}</span>
                  <span className={`expand-arrow${expandedCard === idx ? ' rotated' : ''}`}>▶</span>
                </div>
              </div>
              {expandedCard === idx && (
                <div className="expanded-times">
                  <h4 style={{ color: '#ceb888', marginBottom: 0 }}>Available Times:</h4>
                  {loading ? (
                    <div className="loading-text">Loading...</div>
                  ) : availableTimes.length === 0 ? (
                    <div className="no-times">No times available for this date</div>
                  ) : (
                    <div className="timeslot-list">
                      {availableTimes.map((time) => (
                        <button
                          key={time}
                          className={`timeslot-pill${selectedTimes[service.name] === time ? ' selected' : ''}`}
                          onClick={() => handleTimeSelect(service.name, time)}
                          disabled={Object.values(selectedTimes).includes(time) && selectedTimes[service.name] !== time}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  )}
                  <div>
                    {selectedTimes[service.name] && (
                      <button className="book-btn" onClick={() => handleBooking(service.name)}>
                        Book {service.name} @ {selectedTimes[service.name]}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="calendar-box">
          <DatePicker
            selected={selectedDate}
            onChange={setSelectedDate}
            inline
            calendarClassName="big-calendar"
          />
        </div>
      </div>
      {confirmation && (
        <div className="confirmation-message">
          <p>{confirmation}</p>
        </div>
      )}
    </section>
  );
};

export default Appointment;
