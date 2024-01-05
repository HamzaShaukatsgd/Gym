import React, { useState } from 'react'
import "../css/Navbar.css"
import { IoMdMenu } from "react-icons/io";
import gymlogo from "../gymlogo.png";


const Navbar = () => {
    const [showMenu ,setShowMenu] =useState(false);
  return (
    <nav className='' >
        <div className="desktop ">
           <div className="image">
            <img src={gymlogo} alt="GYM Logo" />
           </div>
           <div className='nav-link-container'>
            <ul className='nav-link'>
                <li><a href="">Class Pack</a></li>
                <li><a href="">Team</a></li>
                <li><a href="">Location</a></li>
                <li><a href="">Contacts</a></li>
            </ul>
           </div>
           <div className='nav-btn'>
            <button className='button1'>Rquest A CallBack</button>
           </div>
           <div className="menu">
           <IoMdMenu  className='menu-icon' onClick={()=>setShowMenu(!showMenu)}/>
           </div>
        </div>
        <div className={showMenu? "mobile":"mobile1" }>
            <ul>
                <li><a href="">Class Pack</a></li>
                <li><a href="">Team</a></li>
                <li><a href="">Location</a></li>
                <li><a href="">Contacts</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
