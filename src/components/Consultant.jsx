import React from 'react'
import "../css/Consultant.css"
import img_consultant from "../../src/consultant-img.png"

const Consultant = () => {
  return (
   <section className=' flex flex-col
   md:flex-row
   lg:w-[100vw] h-[100vh]  bg-[#161616] sec-consultant lg:flex-row'>
      <div className=" order-2
      lg: consultant-left flex-1">
            <img className='flex justify-center items-center ' src={img_consultant} alt="img_consultant" />
      </div>
      <div className=" flex flex-col  p-8 
      lg: consultant-right flex-1 justify-start items-start pt-32">
        <h1 className='text-2xl
        lg: text-white font-extrabold lg:text-3xl'>FREE CONSULTATION</h1>
        <p className='mt-8 text-[#7D7D7D] pr-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime illum doloribus unde, quod sequi esse exercitationem praesentium magnam accusantium possimus culpa tempora quam autem, numquam quos nostrum sit dignissimos. Libero sunt dignissimos quam quo cupiditate quibusdam.</p>
        <button className='mt-8 p-[8px] text-1xl bg-yellow-500 hover:scale-105' >Request Call Back</button>

      </div>
   </section>
  )
}

export default Consultant
