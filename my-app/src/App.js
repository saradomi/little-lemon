
import './App.css';
import Homepage from "./Homepage";
import BookingPage from "./BookingPage"
import {Routes, Route} from "react-router-dom";
import BookingConfirmation from './MainComponents/BookingComponents/BookingConfirmation';

function App() {
  return (
    <Routes basename="/little-lemon" >
      <Route key="hompage" path="/" element={<Homepage />} />
      <Route key="booking" path="/booking" element={<BookingPage />} />
      <Route key="confirmation" path="/booking/confirmation" element={<BookingConfirmation />} />
    </Routes>
  );
}

export default App;
