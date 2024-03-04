import React from 'react';
import "./Booking.css";
import {useState} from "react";

const BookingForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [availableTimes, setAvailableTimes] = useState([
    {time: "17:00", reserved: false},
    {time: "18:00", reserved: false},
    {time: "19:00", reserved: false},
    {time: "20:00", reserved: false},
    {time: "21:00", reserved: false},
  ]);
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [guests, setGuests] = useState();
  const [occasion, setOccasion] = useState();

  const handleDate = (value) => {
    setDate(value);
  };
  const handleTime = (value) => {
    setTime(value);
  };
  const handleGuests = (value) => {
    setGuests(value);
  };
  const handleOccasion = (value) => {
    setOccasion(value);
  };

  return (
    <>
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1 className="title">Book now</h1>
            <p className="lead-text" >
                Join us for a memorable dining experience, where every dish tells a story and every visit feels like home.
            </p>
          </div>
          <div className="col-6">
            <img className="round-img-2" src="restaurant.jpg" alt="food on a tray"></img>
          </div>
        </div>
      </div>
    </section>
    <section className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="res-date" className='form-label'>Choose date</label>
        <input type="date" id="res-date" className='form-item' onChange={handleDate}/>
        <label htmlFor="res-time" className='form-label'>Choose time</label>
        <select id="res-time" className='form-item'  onChange={handleTime}>
          {availableTimes.map((time, index) => (
            <option key={index}>{time.time}</option>
          ))}
        </select>

        <label htmlFor="guests" className='form-label'>Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" className='form-item'  onInput={handleGuests}/>

        <label htmlFor="occasion" className='form-label'>Occasion</label>
        <select id="occasion" className='form-item'  onChange={handleOccasion}>
          <option>Birthday</option>
          <option>Engagement</option>
          <option>Anniversary</option>
        </select>

        <input type="submit" className="primary-button" value="Make Your reservation" />
      </form>
    </section>
    </>
  );
};

export default BookingForm;
