

function HeroSection() {
    return (
        <section className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h1 className="title">Little Lemon</h1>
                        <h2 className="sub-title" style={{ marginTop: "-20px", paddingTop: "0px" }}>Chicago</h2>
                        <p className="lead-text" >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <button className="primary-button" style={{ marginTop: "100px" }}>Reserve A Table</button>
                    </div>
                    <div className="col-6">
                        <img className="round-img" src="restauranfood.jpg" alt="food on a tray"></img>
                    </div>
                </div>
            </div>
        </section>
    );
    }

    export default HeroSection;