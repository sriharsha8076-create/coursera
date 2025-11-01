import React, { useState } from 'react';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!date) {
      newErrors.date = 'Please select a date';
    }
    
    if (!time) {
      newErrors.time = 'Please select a time';
    }
    
    if (guests < 1 || guests > 10) {
      newErrors.guests = 'Number of guests must be between 1 and 10';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const formData = {
        date,
        time,
        guests,
        occasion
      };
      
      submitForm(formData);
    }
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    if (dispatch) {
      dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
      aria-label="Reservation booking form"
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
        aria-required="true"
        aria-invalid={errors.date ? 'true' : 'false'}
        aria-describedby={errors.date ? 'date-error' : undefined}
      />
      {errors.date && (
        <span id="date-error" role="alert" style={{ color: 'red', fontSize: '0.875rem' }}>
          {errors.date}
        </span>
      )}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        aria-required="true"
        aria-invalid={errors.time ? 'true' : 'false'}
        aria-describedby={errors.time ? 'time-error' : undefined}
      >
        <option value="">Select a time</option>
        {availableTimes && availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>
      {errors.time && (
        <span id="time-error" role="alert" style={{ color: 'red', fontSize: '0.875rem' }}>
          {errors.time}
        </span>
      )}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(parseInt(e.target.value))}
        required
        aria-required="true"
        aria-invalid={errors.guests ? 'true' : 'false'}
        aria-describedby={errors.guests ? 'guests-error' : undefined}
      />
      {errors.guests && (
        <span id="guests-error" role="alert" style={{ color: 'red', fontSize: '0.875rem' }}>
          {errors.guests}
        </span>
      )}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        aria-label="Select occasion"
      >
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Engagement</option>
        <option>Other</option>
      </select>

      <input 
        type="submit" 
        value="Make Your Reservation" 
        aria-label="On Click"
        disabled={!date || !time}
      />
    </form>
  );
};

export default BookingForm;
