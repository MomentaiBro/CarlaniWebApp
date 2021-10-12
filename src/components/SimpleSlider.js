import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "../modules/Testimonials.module.css"
import { useState } from "react";


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: false,
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
      
        { testimonials.map ( (testimonial) =>
        <div className={style.testimonial} style={{width: "600"}}>
          <img className= {style.pic} src={testimonial.image} style={{width: "100px", height: "100px"}}/>
          <p>{testimonial.quote}</p>
          <h2>{testimonial.name}</h2>
        </div>
        )}

    </Slider>
  );
}