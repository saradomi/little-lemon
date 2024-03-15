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
  const [guestsError, setGuestsError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [occasionError, setOccasionError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!date) {
      setDateError(true);
    }
    if(!occasion){
      setOccasionError(true);
    }
    if(occasion && date){
    const reservation = {
      res_date: date,
      res_time: time,
      res_guests: guests,
      res_occasion: occasion,
    };
    const submitResponse = submitAPI(reservation);
    if (submitResponse === true) {
      navigate("/booking/confirmation", { state: reservation });
    }}
  };

  const handleDate = (e) => {
    setDate(e.target.value);
    dispatch({ type: "update_times", selectedDate: e.target.value });
    setDateError(false);
  };
  const handleTime = (e) => {
    setTime(e.target.value);
  };
  const handleGuests = (e) => {
    const value = e.target.value;
    setGuestsError(value > 10 || value < 1);
    setGuests(value);
  };
  const handleOccasion = (e) => {
    setOccasion(e.target.value);
    if(e.target.value !="") setOccasionError(false);
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
        <input
          type="date"
          value={date}
          id="res-date"
          className={dateError ? 'input-error form-item' : 'form-item'}
          onChange={handleDate}
        />
        {dateError && <p style={{color:"red", marginTop: "-15px"}}>Must choose a date.</p>}
        <label htmlFor="res-time" className='form-label'>Choose time</label>
        <select id="res-time" className='form-item'  onChange={handleTime}>
          {state?.availableTimes.map((time, index) => (
            <option key={index}>{time}</option>
          ))}
        </select>

        <label htmlFor="guests" className='form-label'>Number of guests</label>
        <input
          type="number"
          placeholder="1" min="1" max="10"
          id="guests"
          className={guestsError ? 'input-error form-item' : 'form-item'}
          onInput={handleGuests}
          value={guests}
        />
        {guestsError && <p style={{color:"red", marginTop: "-15px"}}>Number of guests must be between 1 and 10.</p>}
        <label htmlFor="occasion" className='form-label'>Occasion</label>
        <select id="occasion" className={occasionError ? 'input-error form-item' : 'form-item'}  onChange={handleOccasion} >
          <option value="">Select</option>
          <option value="Birthday">Birthday</option>
          <option value="Engagement">Engagement</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {occasionError && <p style={{color:"red", marginTop: "-15px"}}>Must choose an occasion.</p>}
        <input type="submit" className="primary-button" aria-label="On Click" value="Make Your reservation" disabled={guestsError } />
      </form>
    </section>
    </>
  );
};

export default BookingForm;
