import React, { useReducer } from 'react';
import './App.css';
import BookingForm from './components/BookingForm';

// Seeded random number generator for consistent times
const seededRandom = (seed) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return () => (s = s * a % m) / m;
};

const fetchAPI = (date) => {
  const result = [];
  const random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) result.push(i + ':00');
    if (random() < 0.5) result.push(i + ':30');
  }
  
  return result.length > 0 ? result : ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

const submitAPI = (formData) => {
  return true;
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      if (action.date) {
        const dateObj = new Date(action.date);
        return fetchAPI(dateObj);
      }
      return state;
    default:
      return state;
  }
};

const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      alert('Booking confirmed! Thank you for your reservation.');
      console.log('Form submitted:', formData);
    } else {
      alert('There was an error submitting your booking. Please try again.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Little Lemon Restaurant</h1>
        <h2>Table Reservation</h2>
      </header>
      <main>
        <BookingForm 
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </main>
    </div>
  );
}

export default App;
