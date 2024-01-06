import React from 'react'
import signup_img from "../../src/signup-bg.png"

const Singup = () => {
  return (
    <section className=' flex flex-col w-[100vw] min-h-[100vh] justify-center items-center pt-8 pb-8
    sm:flex-row
    lg:sec-signup  bg-black  text-white lg:flex-row '>
       <div className="signup-left flex-1 flex justify-center items-start flex-col p-10">
         <h1 className='text-1xl font-extrabold'>THE MONTH, EVERY</h1>
         <h1 className='text-6xl font-extrabold mt-8'>FRIDAY</h1>
         <h1 className='text-1xl text-yellow-400 font-extrabold mt-6'>SPECIAL TRAINING <span className='font-normal'> WITH PROFESSIONL TRAINERS</span></h1>
         <button className='bg-yellow-500 pl-8 pr-8 pt-2 pb-2 rounded hover:scale-105 mt-6 ml-8'>Signup</button>
       </div>
       <div className="signup-right flex-[1] ">
       <a href=""> <img className='pt-12' src={signup_img} alt="Signup Images" /></a>
       </div>
    </section>
  )
}

export default Singup
