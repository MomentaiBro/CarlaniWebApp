import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <h3>HELLO</h3>
      </div>
      <div>
        <h3>MEOW</h3>
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