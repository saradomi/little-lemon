import React from 'react';
import "./Booking.css";
import {useState} from "react";
import {useNavigate } from "react-router-dom";
import {submitAPI} from"../API";

const BookingForm = ({ dispatch, state }) => {

  const navigate = useNavigate();

  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [guests, setGuests] = useState();
  const [occasion, setOccasion] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = {
      res_date: date,
      res_time: time,
      res_guests: guests,
      res_occasion: occasion,
    };
    const submitResponse = submitAPI(reservation);
    if (submitResponse === true) {
      navigate("/booking/confirmation", { state: reservation });
    }
  };

  const handleDate = (e) => {
    setDate(e.target.value);
    dispatch({ type: "update_times", selectedDate: e.target.value });
  };
  const handleTime = (e) => {
    setTime(e.target.value);
  };
  const handleGuests = (e) => {
    setGuests(e.target.value);
  };
  const handleOccasion = (e) => {
    setOccasion(e.target.value);
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
    <section className="container" aria-label="Main Content">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="res-date" className='form-label'>Choose date</label>
        <input type="date" id="res-date" className='form-item' onChange={handleDate}/>
        <label htmlFor="res-time" className='form-label'>Choose time</label>
        <select id="res-time" className='form-item'  onChange={handleTime}>
          {state?.availableTimes.map((time, index) => (
            <option key={index}>{time}</option>
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
