import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "../modules/Testimonials.module.css"
import { useState } from "react";




export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

 

    const [ testimonials, setTestimonials ] = useState([
        {id: "test1", image: "tony.jpg", name: "Jane", quote: "Carlani is the BEST. I love Carlani!" },
        {id: "test2", image: "tony.jpg", name: "John", quote: "Carlani is my FAVORITe. I highly recommend Carlani!" },
        {id: "test3", image: "tony.jpg", name: "Joan", quote: "Wow! Cafrlani is so cool" },
    ]);
  

  return (
    <Slider {...settings}>

      {/* <div className={style.testiWrapper}> 
        { testimonials.map( (testimonial) => 
          <>
            <div className={style.testimonial} id={testimonial.id}>
              <div className={style.pic}>
                  <img className={style.image} src={testimonial.image} alt="testimonial pictures"/>
              </div>   
                  <h4 className={style.quote}>{testimonial.quote}</h4>
                  <h2 className={style.name}>{testimonial.name}</h2>
            </div>
          </>
        )}
      </div>  */}
      
      <div>
        <img src="tony.jpg" style={{width: "100px", height: "100px"}}/>
        <p>HELLO</p>
        <h2>Tony</h2>
      </div>
      <div>
        <img className={style.image} src={testimonials.image} alt="testimonial pictures"/>
        <h4 className={style.quote}>{testimonials.quote}</h4>
        <h2 className={style.name}>{testimonials.name}</h2>
        {/* <h3>MEOW</h3> */}
      </div>
      <div>
        <h3>WHWOWOHW</h3>
      </div>
      <div>
        <h3>MARBIE</h3>
      </div>
      <div>
        <h3>5DSKLFJH</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}