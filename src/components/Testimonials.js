import { useState } from "react";
import style from "../modules/Testimonials.module.css"

const Testimonials = () => {

    const [ testimonial, setTestimonial ] = useState([
        {name: "Jane", quote: "Carlani is the BEST. I love Carlani!", image: "./img/tony-closeup.jpg"},
        {name: "Jane", quote: "Carlani is the BEST. I love Carlani!", image: "./img/tony-closeup.jpg"},
    ]);

const Testimonials = () => {
    return ( 
        <div className={style.testimonials} id="testimonials">
            I'm the Testimonial Page!
            <span className={style.testimonial}>
                    
                <img className={style.image} src={testimonial.image}/>

                <h2 className={style.name}>{testimonial.name}</h2>

                <h4>{testimonial.quote}</h4>
                  
                </span>

        </div>
     );
}
 
export default Testimonials;