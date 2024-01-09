import React from 'react'
import "../css/JoinForm.css"

const Join_Form = () => {
  return (
    <div className='Section-JoinForm min-h-[100vh] w-[100vw] flex justify-center items-center box-border'>

        <div className="form-container  w-[70vw] min-h-[80vh] rounded    p-8" >
          <h1 className='text-gray-700 font-light text-3xl text-center
           md:text-4xl
           lg:text-5xl  '>Joining Form</h1>
          <form action="" className='flex flex-col gap-4'>
              <div className="Name-input ">
                <div className="label common-label" >Name<span className='text-red-700'>*</span></div>
                <div className="name-input1 flex w-[100%] gap-4">
                    <input type="text" placeholder='First Name' className='w-[50%] common-input  '/>
                    <input className='w-[50%] common-input ' type="text" placeholder='last Name '/>
                </div>
              </div>
              <div className="current-weight flex flex-col gap-2 ">
                <label htmlFor="" className='
                common-label'>Your Current Weight (lbs)<span className='text-red-700'>*</span></label>
                <input type="text" placeholder='Plz Enter Current Weight' className='common-input' />
              </div>
              <div className="desired-weight flex flex-col gap-2 ">
                <label htmlFor="" className='common-label'>Height<span className='text-red-700'>*</span></label>
                <input type="text" placeholder='Plz Enter Height' className='common-input' />
              </div>
              <div className="desired-weight flex flex-col gap-2 ">
                <label htmlFor="" className='common-label'>Desired Weight (lbs)<span className='text-red-700'>*</span></label>
                <input type="text" placeholder='Plz Enter Height' className='common-input' />
              </div>
              <div className="Trainer_name flex flex-col gap-2 ">
                <label htmlFor="" className='common-label'>Trainer Name<span className='text-red-700'>*</span></label>
                
                <select className='w-[100%] common-input' name="" id="">
                     <option value="">Ali Ahmed</option>
                     <option value="">Sohail Akhter</option>
                     <option value="">Muhammad Umair</option>
                    </select>
              </div>
              <div className="Home-address flex flex-col gap-2">
              <label htmlFor="" className='common-label'>Home Addess<span className='text-red-700'>*</span></label>
                <input type="text" placeholder='Plz Enter Street Address' className='common-input' />
                <div className="State-input flex w-[100%]  mt-[0.5rem] gap-1
                lg:gap-4">
                    <input type="text" placeholder='City' className='w-[50%] common-input'/>
                   
                    <select className='w-[50%] common-input' name="" id="">
                     <option value="">State</option>
                     <option value="">Jinnah Garden</option>
                     <option value="">Ghouri Town</option>
                    </select>
                </div>
                <div className="City-input1 flex w-[100%] gap-1 mt-[0.5rem] 
                lg:gap-4">
                    <input type="text" placeholder='Postal/Zip-Code' className='w-[50%] common-input'/>
                    <select className='w-[50%] common-input' name="" id="">
                     <option value="">City</option>
                     <option value="">Lahore</option>
                     <option value="">Pakistan</option>
                    </select>
                </div>
              </div>
              <div className="Email flex flex-col gap-1 ">
                <label htmlFor="" className='common-label'>Email<span className='text-red-700'>*</span></label>
                <input type="text" placeholder='Email' className='common-input' />
              </div>
              <div className="radio-personal">
                <h1 className='common-label'>Do You Require Personal Trainer</h1>
                 <label htmlFor="" className='block common-label'>
                    <input type="radio"  className='w-[5%] h-[0.8em] border-[0px]'/> Yes
                 </label>
                 <label htmlFor="" className='block common-label '>
                    <input type="radio" className='w-[5%] h-[0.8em] border-[0px]' /> No
                 </label>
              </div>
              <div className="radio-personal">
                <h1 className='common-label'>Member Type<span className='text-red-700'>*</span></h1>
                 <label htmlFor="" className='block common-label'>
                    <input type="radio"  className='w-[5%] h-[0.8em] border-[0px]'/> Regular
                 </label>
                 <label htmlFor="" className='block common-label '>
                    <input type="radio" className='w-[5%] h-[0.8em] border-[0px]' /> Pro
                 </label>
                 <label htmlFor="" className='block common-label '>
                    <input type="radio" className='w-[5%] h-[0.8em] border-[0px]' /> Vip
                 </label>
              </div>
              <div className='flex justify-center items-center'>
              <button className='w-[80%] bg-green-700 text-white rounded-full  hover:scale-105 text-[1.2rem]
              md:text-[1.2rem] md:p-4 
              lg:text-2xl lg:p-4'>Join</button>
              </div>
              
         
        </form>
        </div>
        
      
    </div>
  )
}

export default Join_Form
