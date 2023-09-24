import React from 'react';
import { NavLink } from "react-router-dom";
import "./NavTwo.css";

// import logo
import Logo from "./Logo.png";

// import icons
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";

const NavTwo = () => {
  return (
    <div id='nav-two'>
      <div id="nav-two-container">
        <div id='main-nav-1-container'>
          <NavLink to="/" className="main-nav-1-item-link">
            <img src={Logo} alt='' id="logo-img" />
          </NavLink>
          <ol id='main-nav-1'>
            <li className='main-nav-1-item'>
              <NavLink to="/home" className="main-nav-1-item-link">Home</NavLink>
            </li>
            <li className='main-nav-1-item'>
              <NavLink to="/shop" className="main-nav-1-item-link">Shop</NavLink>
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
              <NavLink to="/home" className="main-nav-1-item-link">
                <BsCart3 className='nav-icon' id='cart-icon' />
              </NavLink>
            </li>
            <li className='main-nav-1-item'>
              <NavLink to="/home" className="main-nav-1-item-link">
                <CgProfile className="nav-icon" id="profile-icon" />
              </NavLink>
            </li>
          </ol>
          <FaBars className="nav-icon" id="hamburger-icon" />
        </div>
        <h2 id='site-name'>Zem Afrocrafty</h2>
        <ol id='main-nav-2'>
          <li className='main-nav-2-item'>
            <NavLink to="/" className="main-nav-2-item-link">Shop</NavLink>
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