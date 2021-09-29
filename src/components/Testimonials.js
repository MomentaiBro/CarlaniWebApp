import { useState } from "react";
import style from "../modules/Testimonials.module.css"

const Testimonials = () => {

    const [ testimonial, setTestimonial ] = useState([
        {name: "Jane", quote: "Carlani is the BEST. I love Carlani!", image: "./img/tony-closeup.jpg"},
        {name: "John", quote: "Carlani is my FAVORITe. I highly recommend Carlani!", image: "./img/tony-closeup.jpg"},
    ]);

    return ( 
        <div className={style.testimonials} id="testimonials">
            I'm the Testimonial Page!
            <div className={style.testimonial}>
                    
                <img className={style.image} src={testimonial.image}/>

                <h2 className={style.name}>{testimonial.name}</h2>

                <h4>{testimonial.quote}</h4>
                  
            </div>

        </div>
     );
}

export default Testimonials;