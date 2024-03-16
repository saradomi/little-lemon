
import { Link } from 'react-router-dom';

function Testimonials() {
    const Card = ({ name, comment, photo }) =>{
        return (
            <div className="testimonials-card">
                <div>
                    <p >{comment}</p>
                </div>
                <div className="testimonials-name">
                    <img src={photo} alt="Testimonial person" />
                    <p>{name}</p>
                </div>
            </div>
        );
    }
    return (
        <section className="testimonials" id="testimonials">
            <div className="container">
                <div >
                    <div style={{ textAlign: "center", marginBottom: "30px" }}>
                        <h2 className="sub-title" style={{color:"#333333"}}>Testimonials</h2>
                    </div>
                </div>
                <div className="testimonials-container" >
                <Card
                    name="Rita Pereira"
                    photo="person1.jpg"
                    stars="5"
                    comment="The food at Little Lemon is always delicious and fresh"
                />
                <Card
                    name="Miguel Milhão"
                    photo="person2.jpg"
                    stars="5"
                    comment="The aroma of the dishes is enough to make your mouth water."
                />
                <Card
                    name="José Sócrates"
                    photo="person3.jpg"
                    stars="4"
                    comment="Little Lemon is as delightful to the eye as it is to the taste buds."
                />
                <Card
                    name="Roberto Carlos"
                    photo="person4.jpg"
                    stars="5"
                    comment="Never fails to impress with their succulent and savory menu offerings."
                />
                </div>
            </div>
        </section>
    );
    }

    export default Testimonials;