
import './App.css';
import Nav from "./MainComponents/Nav";
import Header from "./MainComponents/Header";
import BookingForm from "./MainComponents/BookingForm";
import Footer from "./MainComponents/Footer";

function BookingPage() {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <BookingForm></BookingForm>
      <Footer></Footer>
    </>
  );
}

export default BookingPage;
