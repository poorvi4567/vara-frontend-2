import React from 'react'
import './Hero.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TrainEngine from '../Assets/images/TrainEngine.jpeg';
import CatCounting from  "../Assets/images/Cat Counting.jpeg";
import Bangles from "../Assets/images/Bangles.jpeg";
const Hero = () => {
    const images = [
        TrainEngine,
        CatCounting,
        Bangles
      ];
      const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000, // 10 seconds
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      };


    return (
        <div className = 'hero'>
            <Slider {...settings}>
      {images.map((src, i) => (
        <div key={i}>
          <img src={src} alt={`slide-${i}`} style={{ width: "100%", height: "100%",objectFit: "cover" }} />
        </div>
      ))}
    </Slider>
    </div>
        
    )
}

export default Hero;