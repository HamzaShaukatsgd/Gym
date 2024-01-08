import React from "react";
import "../css/Gallery.css";
import gallery_images from "../js/galleryImg"

const Gallery = () => {
  console.log(gallery_images);
  return (
    <section className="sec-gallery w-[100vw] min-h-[50vh] bg-[#161616] text-white p-12">
      <h1 className="text-3xl text-white font-bold text-center mb-8">
        Image Gallery
      </h1>
      <div
        className="content-center self-center justify-center grid gap-x-8 gap-y-8 grid-cols-1 sm:grid-cols-2 
         md:grid-cols-3
          lg:grid-cols-4
           xl:grid-cols-5 
            "
      >
        {
        gallery_images.map(item=>{
          return(
            <div className="container22">
          <img src={item.img} alt="gallery Iamges" className="w-[100%]" />
          <di className="overlay">
            {item.text}
          </di>
        </div>
          )
        })
       } 

      </div>
    </section>
  );
};

export default Gallery;
