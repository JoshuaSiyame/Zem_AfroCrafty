import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import "./NavTwo.css";

// import logo
import Logo from "./Logo.png";

// import icons
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaBars, FaTimes } from "react-icons/fa";

// import component
import DropMenu from '../DropMenu/DropMenu';

const NavTwo = () => {

  // change/hide hamburger icon on click and display menu
  const handleHamburgerIcon = () =>{
    // get the icon by id
    const hamburgerIcon:any = document.getElementById("hamburger-icon");
    hamburgerIcon.style.display = "none";

    // display block the close button
    const closeIcon:any = document.getElementById("close-icon");
    closeIcon.style.display = "block"

    // display the dropdown list menu
    const dropDownMenu:any = document.getElementById("drop-menu");
    dropDownMenu.style.display = "block"
  }

  // change/hide close icon on click and remove the menu
  const handleCloseIcon = () =>{
    // get the icon by id
    const closeIcon:any = document.getElementById("close-icon");
    closeIcon.style.display = "none";

    // display block the hamburger icon
    const hamburgerIcon:any = document.getElementById("hamburger-icon");
    hamburgerIcon.style.display = "block";

    // hide the dropdown list menu
    const dropDownMenu:any = document.getElementById("drop-menu");
    dropDownMenu.style.display = "none";
  }

  return (
    <div id='nav-two'>
      <div id="nav-two-container">
        <div id='main-nav-1-container'>
          <NavLink to="/products" className="main-nav-1-item-link">
            <img src={Logo} alt='' id="logo-img" />
          </NavLink>
          <ol id='main-nav-1'>
            {/* <li className='main-nav-1-item'>
              <NavLink to="/" className="main-nav-1-item-link">Home</NavLink>
            </li> */}
            <li className='main-nav-1-item'>
              <NavLink to="/products" className="main-nav-1-item-link">Shop</NavLink>
            </li>
            <li className='main-nav-1-item'>
              <NavLink to="/create-product" className="main-nav-1-item-link">Add Product</NavLink>
            </li>
            <li className='main-nav-1-item'>
              <NavLink to="/blog" className="main-nav-1-item-link" id='last-left'>Blog</NavLink>
            </li>
          </ol>
          <ol id='main-nav-1-icons'>
            <li className='main-nav-1-item'>
              <NavLink to="/likes" className="main-nav-1-item-link">
                {/* <FcLike className='nav-icon' id='like-icon' /> */}
                <FcLikePlaceholder className='nav-icon' id='shadow-like' />
              </NavLink>
            </li>
            <li className='main-nav-1-item'>
              <NavLink to="/cart" className="main-nav-1-item-link">
                <BsCart3 className='nav-icon' id='cart-icon' />
              </NavLink>
            </li>
            <li className='main-nav-1-item'>
              <NavLink to="/profile" className="main-nav-1-item-link">
                <CgProfile className="nav-icon" id="profile-icon" />
              </NavLink>
            </li>
          </ol>
          <FaTimes className='nav-icon' id='close-icon' onClick={handleCloseIcon}/>
          <FaBars className="nav-icon" id="hamburger-icon" onClick={handleHamburgerIcon} />
        </div>
        <DropMenu />
        <h2 id='site-name'>Zem Afrocrafty</h2>
        <ol id='main-nav-2'>
          <li className='main-nav-2-item'>
            <NavLink to="/products" className="main-nav-2-item-link">Shop</NavLink>
          </li>
          {/* <li className='main-nav-2-item'>
            <NavLink to="/create-product" className="main-nav-2-item-link">Create Product</NavLink>
          </li> */}
          <li className='main-nav-2-item'>
            <NavLink to="/products/women" className="main-nav-2-item-link">Women</NavLink>
          </li>
          <li className='main-nav-2-item'>
            <NavLink to="/products/men" className="main-nav-2-item-link">Men</NavLink>
          </li>
          <li className='main-nav-2-item'>
            <NavLink to="/products/accessories" className="main-nav-2-item-link">Accessories</NavLink>
          </li>
          <li className='main-nav-2-item'>
            <NavLink to="/products/others" className="main-nav-2-item-link">Others</NavLink>
          </li>
          <li className='main-nav-2-item'>
            <NavLink to="/products/go-pro" className="main-nav-2-item-link">Go Pro</NavLink>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default NavTwo;