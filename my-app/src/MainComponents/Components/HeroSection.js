

function HeroSection() {
    return (
        <section className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h1 className="title">Little Lemon</h1>
                        <h2 className="sub-title" style={{ marginTop: "-20px", paddingTop: "0px" }}>Chicago</h2>
                        <p className="lead-text" >
                            A culinary haven where global flavors meet local charm. Led by Chef Mario and Adrian, our cozy eatery offers a delightful menu crafted from the freshest ingredients.
                            Join us for a memorable dining experience, where every dish tells a story and every visit feels like home. 
                        </p>
                        <button className="primary-button" style={{ marginTop: "80px" }} aria-label="On Click">Reserve A Table</button>
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