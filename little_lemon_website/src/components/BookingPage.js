import React, { useReducer } from 'react';
import BookingForm from './BookingForm/BookingForm';

const BookingPage = () => {
  const fetchAPI = window.fetchAPI;

  const initializeTimes = () => {
    const today = new Date().toISOString().split('T')[0];  // Get today's date in YYYY-MM-DD format
    return fetchAPI(today);  // Fetch available times for today
  }    

    // Reducer to update times based on selected date (can be expanded in the future)
    const updateTimes = (state, action) => {
      // For now, we'll return the same available times regardless of the date.
      if (action.type === 'UPDATE_TIMES') {
        return initializeTimes();  // could add logic for different dates
      }
      return state;
    };
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <div>
      <h1>Book a Table!!</h1>
      <p>Select your preferred date and time to reserve a table.</p>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
};

export default BookingPage;