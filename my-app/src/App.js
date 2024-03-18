
import './App.css';
import Homepage from "./Homepage";
import BookingPage from "./BookingPage"
import {Routes, Route} from "react-router-dom";
import BookingConfirmation from './MainComponents/BookingComponents/BookingConfirmation';

function App() {
  return (
    <Routes basename="/little-lemon">
      <Route path="/" element={<Homepage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/booking/confirmation" element={<BookingConfirmation />} />
    </Routes>
  );
}

export default App;
