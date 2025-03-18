"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@/app/globals.css'

const ProjectCard = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    cssEase: "linear"

    
  };
  return (
    // <div className=" p-4 border w-full m-auto border-amber-400" >
      <div className=' md:w-max w-full max-w-6xl mx-auto p-4 '>

        <Slider {...settings} >
          {data.map((d) => (
              <div key={d.id} className="w-full border flex h-full p-[18px] bg-[#140c1c] border-[#8750f7] rounded-xl">
                <div className=' flex flex-col justify-center items-center rounded-t-xl'>
                  <img src={d.img} alt="card" className=" w-full h-[250px] object-cover" />
                </div>

                <div className="flex flex-col justify-center item-center p-4 ">
                  <h2 className="text-white font-semibold my-[8px]">{d.title}</h2>
                  <p className="text-white">{d.des}</p>
                  
                </div>
              </div>
            ))}
        </Slider>
      </div>  
    // </div>  
  );
};
const data = [
  {
    id: 1,
    title: "Jobify",
    des: "Design a UI for jobify with reactjs and tailwind css",
    img: "/Jobify.jpg",
    iconLists: ["/figma.png"],
    link: "",
  },
  {
    id: 2,
    title: "UrticaScan AI",
    des: "Creating skin writing detection system using deep learning ",
    img: "/UrticaScan.png",
    iconLists: [],
    link: "",
  },
  {
    id: 3,
    title: "Credit card fraud detection",
    des: "Creating skin writing detection system using deep learning ",
    img: "/fraud.png",
    iconLists: [],
    link: "",
  },
];  
export default ProjectCard;