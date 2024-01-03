import React from 'react'
import "../css/Consultant.css"
import img_consultant from "../../src/consultant-img.png"

const Consultant = () => {
  return (
   <section className='min-w-[100vw] min-h-[100vh]  bg-[#161616] sec-consultant flex'>
      <div className="consultant-left flex-[1.5]">
            <img src={img_consultant} alt="img_consultant" />
      </div>
      <div className="consultant-right flex-1 flex flex-col  justify-start items-start pt-32">
        <h1 className='text-white font-extrabold text-3xl'>FREE CONSULTATION</h1>
        <p className='mt-8 text-[#7D7D7D] pr-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime illum doloribus unde, quod sequi esse exercitationem praesentium magnam accusantium possimus culpa tempora quam autem, numquam quos nostrum sit dignissimos. Libero sunt dignissimos quam quo cupiditate quibusdam.</p>
        <button className='mt-8 p-[8px] text-1xl bg-yellow-500 hover:scale-105' >Request Call Back</button>

      </div>
   </section>
  )
}

export default Consultant
