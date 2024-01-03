import React from 'react'
import gymlogo1 from "../gymlogo.png"

const Footer = () => {
  return (
    <>
   <section className='w-[100vw] h-[40vh] bg-[#000000] flex text-white justify-center items-center pl-8 pr-8'>
      <div className='flex-1 text-center'><img src={gymlogo1} alt="" /></div>
      <div className='flex-1 text-center'>
      <ul className='flex flex-col items-start justify-center'>
            <a href=""><li>Web Templete</li>   </a>
            <a href=""><li>Web Development</li></a>
            <a href=""><li>Mobile Apps</li>    </a>
            <a href=""><li>UI/UX</li>          </a>
            <a href=""><li>Wordpress</li>      </a> 
        </ul>
      </div>
      <div className='flex-1 text-center'>
      <ul className='flex flex-col items-start justify-center'>
            <a href=""><li>Web Templete</li>   </a>
            <a href=""><li>Web Development</li></a>
            <a href=""><li>Mobile Apps</li>    </a>
            <a href=""><li>UI/UX</li>          </a>
            <a href=""><li>Wordpress</li>      </a> 
        </ul>
      </div>
      <div className='flex-1 text-center'>
      <ul className='flex flex-col items-start justify-center'>
            <a href=""><li>Web Templete</li>   </a>
            <a href=""><li>Web Development</li></a>
            <a href=""><li>Mobile Apps</li>    </a>
            <a href=""><li>UI/UX</li>          </a>
            <a href=""><li>Wordpress</li>      </a> 
        </ul>
        </div>
       
   </section>
   <section className='bg-[#000000] w-[100vw] h-[15vh]'>
       <hr className=' h-[1px] bg-yellow-500 text-yellow-500'/>
       <a href=""><h1 className='mt-[1rem] text-white text-center'>mhamzashaukat786@gmail.com</h1></a>
   </section>
   </>
  )
}

export default Footer
