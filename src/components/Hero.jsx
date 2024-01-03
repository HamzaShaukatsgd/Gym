import React from 'react'
import "../css/Hero.css"

const Hero = () => {
  return (
    <section className='sec-hero w-[100vw] max-h-[100vh] flex mt-0 bg-slate-500'>
        <div className="hero-left flex-1 bg-[#161616] flex justify-around relative z-[99]">
            <img className='hero-img w-[300px] h-[400px] ' src="./Pictures/Hero-img.png" alt="Hero"  />
           <hr className='w-[36rem] text-4xl h-[1px] absolute bg-purple-600 z-[-1] top-23 right-38 -rotate-45' /> 
           <hr className='w-[42rem] text-4xl h-[1px] absolute bg-[#E3E212] z-[-1] top-40  -rotate-45' /> <hr className='w-[32rem] text-4xl h-[1px] absolute bg-red-700 z-[-1] top-43 -rotate-45' /> 

        </div>
        <div className="hero-right flex-[1.5] bg-[#161616] flex flex-col justify-center items-center ">
            <div className=''>
            <span className='build-text text-6xl font-extrabold text-white '>BUILD YOUR </span><br/>
            <span className='text-7xl font-extrabold text-white build-text'>BODY</span><br/>
            <span className='text-7xl font-extrabold text-white build-text'>STRONG</span>
            <p className='text-start ml-5 text-white mt-3 build-text1'>Winning is easer than you thing</p>
            </div>
        </div>
    </section>
  )
}

export default Hero
