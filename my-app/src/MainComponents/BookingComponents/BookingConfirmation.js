import React from "react";
import { useLocation } from "react-router-dom";
import "./BookingConfirmation.css";
import Nav from "../Nav";

function BookingConfirmation() {
  const location = useLocation();
  return (
    <>
        <Nav></Nav>
        <div className="confirm-bg">
            <div className="container">
                <div className="confirm-page">
                <h1>Booking has been confirmed!</h1>
                <p>Thank you for making a reservation with us</p>
                </div>
            </div>
        </div>
    </>
  );
}

export default BookingConfirmation;