
function Footer() {
    return (
      <div style={{backgroundColor: "#EDEFEE"}}>
        <footer className="container" style={{backgroundColor: "#EDEFEE"}}>
          <div className="row">
            <ul className="col-12 weeks-special">
                <li><img alt="logo footer"  src="Logo.svg"/></li>
                <li>
                  <div>
                    <p className="weeks-special" style={{marginBottom:"10px"}}>Contact</p>
                    <p>Chicago, IL 60000-0000</p>
                    <p>+351 222 222 222</p>
                  </div>
                  </li>
                <li>
                  <div className="social-media">
                    <p className="weeks-special">Social Media</p>
                    <a target="_blank" href="https://www.facebook.com"><img alt="logo-facebook" src="F.png" ></img></a>
                    <a target="_blank" href="https://www.instagram.com/guidasmoranes/"><img alt="logo-instagram" src="I.png" ></img></a>
                    <a target="_blank" href="https://www.behance.net/GuidaSMoranes" ><img alt="logo-behance" src="B.png" ></img></a>
                  </div>
                </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  };

  export default Footer;