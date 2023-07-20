import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./navbar.css";
import {FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  const[showMediaIcon, setshowMediaIcon] = useState(false);
  // console.log(showMediaIcon)


  return (
    <div>
      <nav className='main_nav'>
        {/* First logo part  */}
        <div className="logo">
            <h2><span>N</span>itin <span>R</span>ajput
            </h2>
        </div>

        {/* second menu part  */}
        <div className= {showMediaIcon ? "menu_link mobile-menu-link" : "menu_link"}>
            <ul>
                <li><NavLink  className={({ isActive }) => (isActive ? 'active_class' : 'notactive_class')} to={"/"} >Home</NavLink></li>
                <li><NavLink  className={({ isActive }) => (isActive ? 'active_class' : 'notactive_class')} to={"/about"}>about</NavLink></li>
                <li><NavLink  className={({ isActive }) => (isActive ? 'active_class' : 'notactive_class')}  to={"/contactUs"}>Contact</NavLink></li>
                <li><NavLink  className={({ isActive }) => (isActive ? 'active_class' : 'notactive_class')}  to={"/Servies"}>Servies</NavLink></li>
            </ul>
        </div>

        {/* third social Link */}
        <div className="social_media">
             <ul className='social_media_desktop'>
                <li><a href="https://www.facebook.com/nitinrajputindia/" target='/blank' ><FaFacebook className='facebook'/></a></li>
                <li><a href="https://www.instagram.com/nitinrajputindia/" target='/blank' ><FaInstagram className='instagram'/></a></li>
                <li><a href="https://github.com/nitinrajputind" target='/blank' ><FaGithub className='github' /></a></li>
             </ul>

             {/* hamburger menu start */}
             <div className="hamburger_menu">
              <Link  onClick={()=> setshowMediaIcon(!showMediaIcon)} ><GiHamburgerMenu/></Link>
             </div>
        </div>

      </nav>
    </div>
  )
}

export default Navbar
