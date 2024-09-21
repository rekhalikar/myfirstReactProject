import React from 'react';

const BookingSlot = ({ time }) => {
  return <option value={time}>{time}</option>;
};

export default BookingSlot;