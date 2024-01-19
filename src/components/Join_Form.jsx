import React, { useState } from 'react'
import "../css/JoinForm.css"
import Navbar from './Navbar'
import Footer from './Footer'
import { useFormik } from 'formik'
import { joinUpSchema } from '../schemas/Join_scheema'

const initialValues={
  first_name:"",
  last_name:"",
  current_weight:"",
  height:"",
  desired_Weight:"",
  home_address:"",
  email:"",

}
const Join_Form = () => {
  const [store,setStore]=useState([]);
  const {values, errors, touched, handleBlur, handleChange, handleSubmit}= useFormik({
   initialValues:initialValues,
   validationSchema:joinUpSchema,
   onSubmit :(values,action)=>{
          // console.log("Ya Values Ha",values);
          //  setStore([...store,values]);
          //  action.resetForm();
          console.log("Before Update:", store);
    // setStore(prevStore => [...prevStore, values]);
    setStore([...store,values]);
    console.log("After Update:", store);
    prompt("Successfuly data submit");
    action.resetForm();
   }
  
    
   })
  console.log("Store",store);
  return (<>
     <Navbar/>
    <div className='Section-JoinForm min-h-[100vh] w-[100vw] flex justify-center items-center box-border pt-6 pb-6 flex-col'>

        <div className="form-container  w-[70vw] h-auto rounded    p-8" >
          <h1 className='text-gray-700 font-light text-3xl text-center
           md:text-4xl
           lg:text-5xl  '>Joining Form</h1>
          <form action="" onSubmit={handleSubmit} className='flex flex-col gap-4'>
              <div className="Name-input ">
              <label htmlFor="name"
               className='
                common-label'>Name<span className='text-red-700'>*</span></label>
                <div className="name-input1 flex w-[100%] gap-4">
                  <div className='flex flex-col w-[100%]'>
                    <input type="text"
                     placeholder='First Name'
                     name='first_name'
                     id='first_name'
                     value={values.first_name}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     autoComplete='off'
                      className='w-[100%] common-input outline-none  '/>
                    {errors.first_name && touched.first_name ?(<p className='text-red-600'>{errors.first_name}</p>) : null}
                    </div>
                    <div className='flex flex-col w-[100%]'>
                    <input className='w-[100%] common-input outline-none' 
                    type="text" 
                    name="last_name"
                    id='last_name'
                    value={values.last_name}
                     onChange={handleChange}
                     onBlur={handleBlur}
                    autoComplete='off'
                    placeholder='last Name '/>
                    {errors.last_name && touched.last_name ?(<p className='text-red-600'>{errors.last_name}</p>) : null}
                    </div>
                </div>
              </div>
              <div className="current-weight flex flex-col gap-2 ">
                <label htmlFor="current_weight" className='
                common-label'>Your Current Weight (lbs)<span className='text-red-700'>*</span></label>
                <input type="text"
                name='current_weight'
                id='current_weight'
                value={values.current_weight}
                     onChange={handleChange}
                     onBlur={handleBlur}
                placeholder='Plz Enter Current Weight' className='common-input outline-none' />
              </div>
              {errors.current_weight && touched.current_weight ?(<p className='text-red-600'>{errors.current_weight}</p>) : null}
              <div className="desired-weight flex flex-col gap-2 ">
                <label htmlFor="height" className='common-label'>Height<span className='text-red-700'>*</span></label>
                <input type="text" placeholder='Plz Enter Height' className='common-input outline-none'
                name='height'
                id='height'
                value={values.height}
                     onChange={handleChange}
                     onBlur={handleBlur}
                />
              </div>
              {errors.height && touched.height ?(<p className='text-red-600'>{errors.height}</p>) : null}
              <div className="desired-weight flex flex-col gap-2 ">
                <label htmlFor="desired_Weight" className='common-label'>Desired Weight (lbs)<span className='text-red-700'>*</span></label>
                <input type="text"
                 name='desired_Weight'
                 id='desired_Weight'
                 value={values.desired_Weight}
                     onChange={handleChange}
                     onBlur={handleBlur}
                 placeholder='Plz Enter Height' className='common-input outline-none' />
              </div>
              {errors.desired_Weight && touched.desired_Weight ?(<p className='text-red-600'>{errors.desired_Weight}</p>) : null}
              <div className="Trainer_name flex flex-col gap-2 ">
                <label htmlFor="" className='common-label'>Trainer Name<span className='text-red-700'>*</span></label>
                
                <select className='w-[100%] common-input' name="" id="">
                     <option value="">Ali Ahmed</option>
                     <option value="">Sohail Akhter</option>
                     <option value="">Muhammad Umair</option>
                    </select>
              </div>
              <div className="Home-address flex flex-col gap-2">
              <label htmlFor="home_address" className='common-label'>Home Addess<span className='text-red-700'>*</span></label>
                <input type="text"
                name='home_address'
                id='home_address'
                value={values.home_address}
                     onChange={handleChange}
                     onBlur={handleBlur}
                placeholder='Plz Enter Street Address' className='common-input outline-none' />
                <div className="State-input flex w-[100%]  mt-[0.5rem] gap-1
                lg:gap-4">
                    <input type="text" placeholder='City' className='w-[50%] common-input outline-none'/>
                   
                    <select className='w-[50%] common-input' name="" id="">
                     <option value="">State</option>
                     <option value="">Jinnah Garden</option>
                     <option value="">Ghouri Town</option>
                    </select>
                </div>
                <div className="City-input1 flex w-[100%] gap-1 mt-[0.5rem] 
                lg:gap-4">
                    <input type="text" placeholder='Postal/Zip-Code' className='w-[50%] common-input outline-none'/>
                    <select className='w-[50%] common-input' name="" id="">
                     <option value="">City</option>
                     <option value="">Lahore</option>
                     <option value="">Pakistan</option>
                    </select>
                </div>
              </div>
              <div className="Email flex flex-col gap-1 ">
                <label htmlFor="email" className='common-label'>Email<span className='text-red-700'>*</span></label>
                <input type="text"
                name='email'
                id='email'
                value={values.email}
                     onChange={handleChange}
                     onBlur={handleBlur}
                placeholder='Email' className='common-input outline-none' />
              </div>
              {errors.email && touched.email ?(<p className='text-red-600'>{errors.email}</p>) : null}
              
              <div className="radio-personal">
                <h1 className='common-label'>Member Type</h1>
                 <label htmlFor="" className='block common-label'>
                    <input type="radio"  className='w-[5%] h-[0.8em] border-[0px] '/> Regular
                 </label>
                 <label htmlFor="" className='block common-label '>
                    <input type="radio" className='w-[5%] h-[0.8em] border-[0px]' /> Vip
                 </label>
                 <label htmlFor="" className='block common-label '>
                    <input type="radio" className='w-[5%] h-[0.8em] border-[0px]' /> Pro
                 </label>
              </div>
              <div className="radio-personal">
                <h1 className='common-label'>Do You Require Personal Trainer</h1>
                 <label htmlFor="" className='block common-label'>
                    <input type="radio"  className='w-[5%] h-[0.8em] border-[0px] '/> Yes
                 </label>
                 <label htmlFor="" className='block common-label '>
                    <input type="radio" className='w-[5%] h-[0.8em] border-[0px]' /> No
                 </label>
              </div>
            
              <div className='flex justify-center items-center'>
              <button className='w-[80%] bg-green-700 text-white rounded-full  hover:scale-105 text-[1.2rem]
              md:text-[1.2rem] md:p-4 
              lg:text-2xl lg:p-4'
              type='submit'>Join</button>
              </div>
              
         
        </form>
        </div>
        <div className="list_joining bg-white p-4 mt-8">
          <h1 className='text-center text-3xl font-bold'>Joining List</h1>
        <table>
          <thead>
              <tr>
                <th className='p-2'>First Name</th>
                <th className='p-2'>Last Name</th>
                <th className='p-2'>Desired Weight</th>
                <th className='p-2'>Current Weight</th>
                <th className='p-2'>Height</th>
                <th className='p-2'>Home Address</th>
                <th className='p-2'>Email</th>
                <th className='p-2'>Member Type</th>
              </tr>
              </thead>
              <tbody>
            {
              store.map((item, index)=>{
                return( 
                    <tr>
                      <td className='p-2'>{item.first_name}</td>
                      <td className='p-2'>{item.last_name}</td>
                      <td className='p-2'>{item.desired_Weight}</td>
                      <td className='p-2'>{item.current_weight}</td>
                      <td className='p-2'>{item.height}</td>
                      <td className='p-2'>{item.home_address}</td>
                      <td className='p-2'>{item.email}</td>
                      
                    </tr>
                )
              })
            }
            </tbody>
             </table>
        </div>
      
    </div>
    <Footer/>
    </>
  )
}

export default Join_Form
