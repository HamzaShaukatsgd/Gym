import React from 'react';
import "../css/Program.css";
import backgroundImage from "../../src/bodybuilding1.png";
// import Heroimage from "../../public/Pictures/Hero-img.png"
import card1 from "../../src/card1.png"
import card2 from "../../src/card2.png"
import card3 from "../../src/card3.png"


const Program = () => {
    

  return (
    <section className='program-sec bg-[#000000] text-white p-6 min-w-[100vw] min-h-[100vh] flex flex-col justify-center items-center'>
      <h1 className='sceen-small text-3xl font-extrabold text-center mt-7' >PROGRAMS & CLASSES</h1>
      <div  className="card-container11  flex justify-center items-center gap-8 mt-16">
        <a href="">
          <div className='bg-image flex-1 flex justify-center flex-col items-center bg-no-repeat w-[25vw] h-[45vh] hover:scale-105 cards small-screen'>
          {/* Your card content goes here */}
          <h1 className='text-2xl text-[#E3C212] font-semibold card-text'>Bodybuilding </h1>
          <img className='cardimg-resp'  src={card1} alt="bodybuilder" />
        </div>
        </a>
        <a href="">
        <div className='bg-image1 flex-1 flex justify-center flex-col items-center bg-no-repeat w-[25vw] h-[45vh] hover:scale-105 cards small-screen'>
          {/* Your card content goes here */}
          <h1 className='text-2xl text-[#E3C212] font-semibold card-text'>Yoga</h1>
          <img className='cardimg-resp'  src={card2} alt="bodybuilder" />
        </div>
        </a>
        <a href="">
        <div className='bg-image2 flex-1 flex justify-center flex-col items-center bg-no-repeat w-[25vw] h-[45vh] hover:scale-105 cards small-screen'>
          {/* Your card content goes here */}
          <h1 className='card-text text-2xl text-[#E3C212] font-semibold '>Stretching</h1>
          <img className='cardimg-resp'  src={card3} alt="bodybuilder" />
        </div>
        </a>
      </div>
    </section>
  );
}

export default Program;
