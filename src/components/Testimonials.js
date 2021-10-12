import { useState } from "react";

import style from "../modules/Testimonials.module.css"
import SimpleSlider from "./SimpleSlider";

const Testimonials = () => {

    const [ testimonials, setTestimonials ] = useState([
        {id: "test1", image: "tony.jpg", name: "Jane", quote: "Carlani is the BEST. I love Carlani!" },
        {id: "test2", image: "tony.jpg", name: "John", quote: "Carlani is my FAVORITe. I highly recommend Carlani!" },
        {id: "test3", image: "tony.jpg", name: "Joan", quote: "Wow! Cafrlani is so cool" },
    ]);



    return ( 
        <div className={style.testimonials} id="testimonials">
            I'm the Testimonial Page!
            <SimpleSlider/>
            <div className={style.testiWrapper}> 
                {/* { testimonials.map( (testimonial) => 
                <>
                    <div className={style.testimonial} id={testimonial.id}>

                        <div className={style.pic}>
                            <img className={style.image} src={testimonial.image} alt="testimonial pictures"/>
                        </div>   
                            <h4 className={style.quote}>{testimonial.quote}</h4>
                            <h2 className={style.name}>{testimonial.name}</h2>
                    </div>
                </>
                )} */}
                
            </div>
        </div>
     );
}

export default Testimonials;