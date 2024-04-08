import { useEffect, useState } from "react";
import BurguerMenu from "./BurguerMenu/BurguerMenu";

function Nav() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.scrollY;
      const visible = prevScrollPos > currentScrollPos;
      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const scrollTo = (section) => {
    const aboutElement = document.querySelector(section);
    aboutElement.scrollIntoView({ behavior: "smooth" });
  };
  
    return (
      <nav class="container">
        <div class="row">
          <BurguerMenu />
          <ul id="nav-bar" class="col-12">
              <li><img id="main-logo" alt="logo footer"  src="Logo.svg"/></li>
              <li><a href="/little-lemon/">Homepage</a></li>
              <li><a onClick={() => {
                  scrollTo("#menu");
                }}>Menu</a></li>
              <li><a href="/little-lemon/booking">Booking</a></li>
              <li><a href="" onClick={() => {
                alert("Sorry, this feature is not yet ready.");
              }}>Order Online</a></li>
              <li><a onClick={() => {
                  scrollTo("#testimonials");
                }}>Testimonials</a></li>
              <li><a onClick={() => {
                  scrollTo("#story");
                }}>About Us</a></li>

          </ul>
        </div>
      </nav>
    );
  }
  
  export default Nav;