import React from 'react';
import { NavLink } from 'react-router-dom';
import "./navbar.css";
import {FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
      <nav className='main_nav'>
        {/* First logo part  */}
        <div className="logo">
            <h2><span>N</span>itin <span>R</span>ajput
            </h2>
        </div>

        {/* second menu part  */}
        <div className="menu_link">
            <ul>
                <li><NavLink  className={({ isActive }) => (isActive ? 'active_class' : 'notactive_class')} to={"/"} >Home</NavLink></li>
                <li><NavLink  className={({ isActive }) => (isActive ? 'active_class' : 'notactive_class')} to={"/about"}>about</NavLink></li>
                <li><NavLink  className={({ isActive }) => (isActive ? 'active_class' : 'notactive_class')}  to={"/contactUs"}>Contact</NavLink></li>
                <li><NavLink  className={({ isActive }) => (isActive ? 'active_class' : 'notactive_class')}  to={"/Servies"}>Servies</NavLink></li>
            </ul>
        </div>

        {/* third social Link */}
        <div className="social_media">
             <ul className='social-media-desktop'>
                <li><a href="https://www.facebook.com/nitinrajputindia/" target='/blank' ><FaFacebook className='facebook'/></a></li>
                <li><a href="https://www.instagram.com/nitinrajputindia/" target='/blank' ><FaInstagram className='instagram'/></a></li>
                <li><a href="https://github.com/nitinrajputind" target='/blank' ><FaGithub className='github' /></a></li>
             </ul>
        </div>

      </nav>
    </div>
  )
}

export default Navbar
