import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function Header() {
  const [a] = useState("Latest");
  const [c] = useState("Articles");
  const [e] = useState("Make your mobile the most happening destination with Entertainment Live");
  const [g] = useState("We bring you the latest in Entertainment & information services, right on your phone. From the latest of Bollywood to futuristic applications, get it all here.");
  const [i] = useState("News Headline Dummy Text");
  const [k] = useState("Lifestyle Tips");
  const [m] = useState("We bring you the Latest");
  const [o] = useState("Entertainment & information services");
  const [q] = useState("Right on your Phone");
  const [s] = useState("We bring you the latest");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="section1" className="flex justify-center items-center mt-[10rem] max-lg:mt-[12rem]">
      <div className="relative w-[62.5rem] h-[25.5rem] bg-amber-50 rounded-lg shadow-2xl max-lg:w-[50rem] max-lg:h-[25.4rem] max-md:w-[30rem]">
        <div className="flex flex-col lg:flex-row">
          <div className="relative rounded-lg w-full lg:w-[37rem] max-lg:w-full max-md:w-full max-md:h-[10rem]">
            <Slider {...settings}>
              <div>
                <img src="https://images.unsplash.com/photo-1716050866907-05f17aa6deda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1" className="rounded-lg h-[25.4rem] w-full" />
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1716051118419-bc8a43d898ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D" alt="Image 2" className="rounded-lg h-[25.4rem] w-full" />
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1715148470008-329758d3ace7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D" alt="Image 3" className="rounded-lg h-[25.4rem] w-full" />
              </div>
            </Slider>
            <div
              className="absolute w-full bottom-2 bg-red-700 p-4 rounded-lg max-md:top-[20rem] max-md:h-[5.5rem]"
              style={{ backgroundColor: "rgba(255, 0, 0, 0.4)" }}
            >
              <div className="text-white font-bold">{e}</div>
              <div className="text-zinc-300 mt-2 max-md:hidden">{g}</div>
              <button className="bg-red-900 text-white px-4 py-2 rounded-lg font-bold shadow-2xl mt-2 hidden max-lg:block max-md:ml-[17rem] max-md:mt-[-1.2rem]">Read Me</button>
            </div>
          </div>
          <div className="lg:ml-8 lg:flex lg:flex-col lg:justify-center lg:items-start p-4 lg:p-0 max-md:mt-[15rem]">
            <div className="flex space-x-2">
              <p className="text-black font-mono text-2xl font-bold">{a}</p>
              <p className="text-red-800 font-mono text-2xl font-bold">{c}</p>
            </div>
            <div className="space-y-1">
              <div className="bg-gradient-to-b from-amber-100 to-white p-4 rounded-md shadow-inner flex items-center">
                <img className="h-4" src="/shape16.png" alt="" />
                <p className="ml-2 text-black font-mono font-semibold">{i}</p>
                <p className=" text-red-600 font-mono font-semibold">{k}</p>
              </div>
              <div className="bg-gradient-to-b from-amber-100 to-white p-4 rounded-md shadow-inner flex items-center">
                <img className="h-4" src="/shape16.png" alt="" />
                <p className="ml-2 text-black font-mono font-semibold">{m}</p>
              </div>
              <div className="bg-gradient-to-b from-amber-100 to-white p-4 rounded-md shadow-inner flex items-center">
                <img className="h-4" src="/shape16.png" alt="" />
                <p className="ml-2 text-black font-mono font-semibold">{o}</p>
              </div>
              <div className="bg-gradient-to-b from-amber-100 to-white p-4 rounded-md shadow-inner flex items-center">
                <img className="h-4" src="/shape16.png" alt="" />
                <p className="ml-2 text-black font-mono font-semibold">{q}</p>
              </div>
              <div className="bg-gradient-to-b from-amber-100 to-white p-4 rounded-md shadow-inner flex items-center">
                <img className="h-4" src="/shape16.png" alt="" />
                <p className="ml-2 text-black font-mono font-semibold">{s}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
