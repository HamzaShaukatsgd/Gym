import React from "react";
import "../css/Gallery.css";
import g1 from "../g1.png";
import g2 from "../g2.png";
import g3 from "../g3.png";
import g4 from "../g4.png";

const Gallery = () => {
  return (
    <section className="sec-gallery w-[100vw] min-h-[50vh] bg-[#161616] text-white p-12">
      <h1 className="text-3xl text-white font-bold text-center mb-8">
        Image Gallery
      </h1>
      <div
        className="content-center self-center justify-center grid gap-x-8 gap-y-8 grid-cols-1 sm:grid-cols-2 
         md:grid-cols-3
          lg:grid-cols-4
           xl:grid-cols-5 
            "
      >
        <div className="container22">
          <img src={g4} alt="" className="w-[100%]" />{" "}
          <di className="overlay"></di>
        </div>
        <div className="container22">
          <img src={g1} alt="" className="w-[100%]" />
          <di className="overlay"></di>
        </div>
        <div className="container22">
          <img src={g2} alt="" className="w-[100%]" />
          <di className="overlay"></di>
        </div>
        <div className="container22">
          <img src={g2} alt="" className="w-[100%]" />
          <di className="overlay"></di>
        </div>
        <div className="container22">
          <img src={g3} alt="" className="w-[100%]" />
          <di className="overlay"></di>
        </div>
        <div className="container22">
          <img src={g2} alt="" className="w-[100%]" />
          <di className="overlay"></di>
        </div>
        <div className="container22">
          <img src={g1} alt="" className="w-[100%]" />
          <di className="overlay"></di>
        </div>
        <div className="container22">
          <img src={g4} alt="" className="w-[100%]" />
          <di className="overlay"></di>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
