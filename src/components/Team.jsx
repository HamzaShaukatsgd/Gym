import React from "react";
import team_image from "../team-pic.jpg";
import "../css/Team.css";
import team from "../js/team"
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Team = () => {
    console.log(team);
    const navigate=useNavigate();
  return (
    <>
    <Navbar/>
    <div className="Section-team p-4 max-w-[100vw] min-h-[100vh] ">
      {
        team.map((item)=>{
            return(
                <div className="team-description bg-yellow border-[1px] border-black border-solid p-8 rounded-md mt-6">
                <div
                  className="
                  flex flex-col justify-start items-center
                  md:flex-row md:justify-between md:item-center
                  lg:name-img lg:flex-row  lg:justify-between lg:items-center"
                >
                  <div className="name order-2 flex  flex-col
                  md:order-1
                   lg:order-1
                   
                  ">
                    <h1
                      className="text-[1.md:text-5rem] font-semibold 
                            [1.5rem]
                            lg:text-2xl"
                    >
                       {item.Name}
                    </h1>
                    <h1
                      className="text-[1rem]     
                              font-semibold 
                              md:text-[1.2rem] 
                              lg:text-2xl "
                    >
                      Specialization
                    </h1>
                    <ol
                      className="list-inside ml-12 text-[0.7rem] text-start 
                            md:text-[1.2rem] md:ml-4
                            lg:text-2xl lg:ml-4"
                      type="1"
                    >
                      <li>{item.li1}</li>
                      <li>{item.li2}</li>
                      <li>{item.li3}</li>
                      <li>{item.li4}</li>
                    </ol>
                  </div>
                  <div className="timing flex flex-col justify-center items-center order-3
                  md:order-2
                  lg:order-2">
                    <div className="text-4xl font-extrabold
                    md:text-5xl
                    lg:text-7xl ">Timing</div>
                    <div className="text-1xl font-bold
                    md:text-[1.4rem]
                    lg:text-3xl ">{item.day}</div>
                    <div className="text-[1rem] font-semibold
                    md:text-[1.3rem]
                    lg:text-2xl ">{item.time}</div>
                    <button className=" pl-4 pr-4 pt-[4px] pb-[4px] text-[1rem]
                    md:pl-8 md:mr-8 md:mt-2 md:mb-2 md:text-[1.2rem]
                    lg:pl-8 lg:pr-8 lg:pt-2 lg:pb-2 bg-yellow-500 text-2xl font-bold border-[1px] border-solid border-black rounded-xl mt-4 hover:scale-105" onClick={()=>navigate("/Join_Form")}>
                      Join
                    </button>
                  </div>
                  <div className=" order-1 w-[150px] h-[150px] rounded-full bg-red-700
                  md:w-[175px] md:h-[175px] md:order-3
                  lg: pic lg:w-[200px] lg:h-[200px] lg:order-3 ">
                    <img src={item.img} alt="Team iamge" className="team-image" />
                  </div>
                </div>
              </div>
            )
        })
     }
    </div>
    <Footer/>
    </>
  );
};
export default Team;
