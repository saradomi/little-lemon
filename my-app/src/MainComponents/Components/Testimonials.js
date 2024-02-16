
import { Link } from 'react-router-dom';

function Testimonials() {
    const Card = (props) =>{
        
        return <div class="testimonials-card">
            <img src={props.imgSource} alt={props.name}></img>
            <div class="card-content">
                <div style={{ paddingBottom: "50px"}}>
                    <span >
                        <p className='card-title'>{props.name}</p>
                        <p className='weeks-special'>{props.price}</p></span>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    }
    return (
        <section className="testimonials">
            <div className="container">
                <div >
                    <div style={{ textAlign: "center", marginBottom: "30px" }}>
                        <h2 className="sub-title" style={{color:"#333333"}}>Testimonials</h2>
                    </div>

                </div>
                <div className="testimonials-container" >
                    <Card  />
                    <Card  />
                    <Card  />
                    <Card  />
                </div>
            </div>
        </section>
    );
    }

    export default Testimonials;