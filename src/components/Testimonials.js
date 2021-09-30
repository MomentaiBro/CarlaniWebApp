import { useState } from "react";
import style from "../modules/Testimonials.module.css"

const Testimonials = () => {

    const [ testimonial, setTestimonial ] = useState([
        {image: "./img/tony-closeup.jpg", name: "Jane", quote: "Carlani is the BEST. I love Carlani!" },
        {image: "./img/tony-closeup.jpg", name: "John", quote: "Carlani is my FAVORITe. I highly recommend Carlani!" },
    ]);

    return ( 
        <div className={style.testimonials} id="testimonials">
            I'm the Testimonial Page!
            <div className={style.testimonial}>I am a picture
                <div className={style.pic}>
                    <img className={style.image} src={testimonial.image}/>
                </div>   
                <h2 className={style.name}>{testimonial.name}persons name</h2>

                <h4>{testimonial.quote}this is where the quote should go</h4>
                  
            </div>

        </div>
     );
}

export default Testimonials;