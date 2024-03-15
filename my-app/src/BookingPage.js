
import './App.css';
import { useReducer, useState } from "react";
import Nav from "./MainComponents/Nav";
import Header from "./MainComponents/Header";
import BookingForm from "./MainComponents/BookingForm";
import Footer from "./MainComponents/Footer";
import { fetchAPI } from "./API";

const reducer = (state, action) => {
  switch (action.type) {
    case "update_times":
      return {
        ...state,
        availableTimes: updateTimes(action.selectedDate),
      };
    default:
      return state;
  }
};

export function updateTimes(selectedDate) {
  const date = new Date(selectedDate);
  return fetchAPI(date);
}

export function initializeTimes() {
  return {
    availableTimes: fetchAPI(new Date()),
  };
}

function BookingPage() {

  const [state, dispatch] = useReducer(reducer, initializeTimes());
  return (
    <>
      <Header/>
      <Nav/>
      <BookingForm dispatch={dispatch} state={state} />
      <Footer/>
    </>
  );
}

export default BookingPage;
