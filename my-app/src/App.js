
import './App.css';
import Homepage from "./Homepage";
import BookingPage from "./BookingPage"
import {Routes, Route} from "react-router-dom";

function App() {
  return (
      <Routes >
        <Route path="/"  element={<Homepage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
  );
}

export default App;
