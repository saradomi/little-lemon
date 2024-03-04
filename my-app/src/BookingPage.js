
import './App.css';
import { useReducer, useState } from "react";
import Nav from "./MainComponents/Nav";
import Header from "./MainComponents/Header";
import BookingForm from "./MainComponents/BookingForm";
import Footer from "./MainComponents/Footer";

export const initializeTimes = () => {
  return {
    times: [
      '17:00', '18:00', '19:00', '20:00', '21:00'
    ],
    selectedDate: '2024-03-04',
  };
};

export const updateTimes = (state, action) => {
  return state;
}

function BookingPage() {

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <>
      <Header/>
      <Nav/>
      <BookingForm availableTimes={availableTimes} dispatchTime={dispatch} />
      <Footer/>
    </>
  );
}

export default BookingPage;
