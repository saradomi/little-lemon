
import './App.css';
import Homepage from "./Homepage";
import BookingPage from "./BookingPage"
import {Routes, Route} from "react-router-dom";
import BookingConfirmation from './MainComponents/BookingComponents/BookingConfirmation';

function App() {
  return (
      <Routes >
        <Route path="/"  element={<Homepage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/booking/confirmation" element={<BookingConfirmation />}></Route>
      </Routes>
  );
}

export default App;
