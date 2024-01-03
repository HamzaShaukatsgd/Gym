import React from 'react'
import "../css/Gallery.css"
import g1 from "../g1.png"
import g2 from "../g2.png"
import g3 from "../g3.png"
import g4 from "../g4.png"

const Gallery = () => {
  return (
    <section className='sec-gallery w-[100vw] min-h-[100vh] bg-[#161616] text-white p-4'> 
          <h1 className='text-3xl text-white font-bold text-center mb-8' >Image Gallery</h1>
         <div className='content-center self-center justify-center grid gap-x-8 gap-y-8 grid-cols-4  p-4'>
                 <img src={g4} alt="" />
                 <img src={g1} alt="" />
                 <img src={g2} alt="" />
                 <img src={g2} alt="" />
                 <img src={g3} alt="" />
                 <img src={g2} alt="" />
                 <img src={g1} alt="" />
                 <img src={g4} alt="" />
         </div>
    </section>
  )
}

export default Gallery
