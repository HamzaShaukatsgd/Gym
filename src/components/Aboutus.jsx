import React from 'react'
import "../css/About.css"
import about_pic from "../about_bg.png"
import clock from "../../src/clock.png"

const Aboutus = () => {
  return (
   <section className='section-aboutus flex p-8 w-[100vw] min-h-[100vh] bg-[#000000] justify-start'>
    <div className="about-left flex-1 flex flex-col items-start justify-center  p-6">
      <h1 className='about-heading text-3xl font-bold text-white text-right   block mb-4'>ABOUT US</h1>
      <p className='about-paragraph text-[1.2rem] text-[#7D7D7D] text-left break-normal'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptate, optio veritatis adipisci, dolore, ex soluta qui voluptatum eaque totam consequatur sequi fugiat aperiam tenetur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum est nulla numquam tempora expedita placeat blanditiis, id, magnam odio nostrum in dicta nesciunt eaque.</p>
    <div className='About-watch flex gap-1 mt-5 '>
        <div className="watch">
            <img src={clock} alt="" />
        </div>
        <div className="date-time text-2xl text-[#414141]">
            <h1>Mon-Fri</h1>
            <h1>7AM-11PM</h1>
        </div>
    </div>
    </div>
    <div className="about-right flex-1 bg-no-repeat bg-right-top   text-white ">
      <img className='about-img1 w-[13rem] relative  border-[20px] border-solid border-yellow-500' src={about_pic} alt="About Pic" />
      
    </div>
   </section>
  )
}

export default Aboutus
