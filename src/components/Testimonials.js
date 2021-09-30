import { useState } from "react";
import style from "../modules/Testimonials.module.css"

const Testimonials = () => {

    const [ testimonials, setTestimonials ] = useState([
        {image: "./img/tony.jpg", name: "Jane", quote: "Carlani is the BEST. I love Carlani!" },
        {image: "./img/tony.jpg", name: "John", quote: "Carlani is my FAVORITe. I highly recommend Carlani!" },
    ]);

    return ( 
        <div className={style.testimonials} id="testimonials">
            I'm the Testimonial Page!

            { testimonials.map( (testimonial) => 
            
                <div className={style.testimonial}>
                    <div className={style.pic}>
                        <img className={style.image} src={testimonial.image}/>
                    </div>   
                    <h2 className={style.name}>{testimonial.name}</h2>

                    <h4>{testimonial.quote}</h4>
                    
                </div>
            )}


        </div>
     );
}

export default Testimonials;