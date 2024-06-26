import React, { useState } from 'react'
import Slider from "react-slick";
import {
    bannerImgOne,
    bannerImgTwo,
    bannerImgThree,
    bannerImgFour,
    bannerImgFive,
} from "../../assets/index";
const Banner = () => {
    const [dotActive, setDotActive] = useState(0);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        beforeChange : (prev,next) =>{
                 setDotActive(next);
        },
       
        appendDots: (dots) => (
            <div
              style={{
                position: 'absolute',
                top: "70%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "210px",
               
              }}
            >
              <ul style={{ 
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
               }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                display : "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                background: "#131921",
                padding: "8px 0",
                cursor: "pointer",
                border: "1px blue #f3a847"
              }}
            >
              {i + 1}
            </div>
          )
      };
  return (
    <div className='w-full'>
      <div className='w-full h-full relative'>
      <Slider {...settings}>
        <div>
            <img src={bannerImgOne} />
        </div>
        <div>
            <img src={bannerImgTwo} />
        </div>
        <div>
            <img src={bannerImgThree} />
        </div>
        <div>
            <img src={bannerImgFour} />
        </div>
        <div>
            <img src={bannerImgFive} />
        </div>
      </Slider>
      </div>
    </div>
  )
}

export default Banner
