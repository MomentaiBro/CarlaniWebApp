import { useState } from "react";

import style from "../modules/Testimonials.module.css"
import SimpleSlider from "./SimpleSlider";

const Testimonials = () => {

    const [ testimonials, setTestimonials ] = useState([
<<<<<<< HEAD
        {id: "test1", image: "tony.jpg", name: "Jane", quote: "Carlani is the BEST. I love Carlani!" },
        {id: "test2", image: "tony.jpg", name: "John", quote: "Carlani is my FAVORITe. I highly recommend Carlani!" },
        {id: "test3", image: "tony.jpg", name: "Joan", quote: "Wow! Cafrlani is so cool" },
=======
        {image: "./img/tony.jpg", name: "Jane", quote: "Carlani is the BEST. I love Carlani!" },
        {image: "./img/tony.jpg", name: "John", quote: "Carlani is my FAVORITe. I highly recommend Carlani!" },
        {image: "./img/tony.jpg", name: "John", quote: "Carlani is my FAVORITe. I highly recommend Carlani!" },
>>>>>>> 6411af60e6659dad908ffe1c6618e0f583902db2
    ]);



    return ( 
        <div className={style.testimonials} id="testimonials">
            I'm the Testimonial Page!
<<<<<<< HEAD
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
=======
            This is a test

            { testimonials.map( (testimonial) => 
            
                <div className={style.testimonial}>
                    <div className={style.pic}>
                        <img className={style.image} src={testimonial.image}/>
                    </div>   
                    <h2 className={style.name}>{testimonial.name}</h2>

                    <h4>{testimonial.quote}</h4>
                    
                </div>
            )}


>>>>>>> 6411af60e6659dad908ffe1c6618e0f583902db2
        </div>
     );
}

export default Testimonials;