
import './App.css';
import Homepage from "./Homepage";
import BookingPage from "./BookingPage"
import {Routes, Route} from "react-router-dom";
import BookingConfirmation from './MainComponents/BookingComponents/BookingConfirmation';

function App() {
  return (
      <Routes basename="/little-lemon">
        <Route path="/little-lemon/"  element={<Homepage />}></Route>
        <Route path="/little-lemon/booking" element={<BookingPage />}></Route>
        <Route path="/little-lemon/booking/confirmation" element={<BookingConfirmation />}></Route>
      </Routes>
  );
}

export default App;
