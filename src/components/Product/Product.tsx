import React from 'react';
import { NavLink } from "react-router-dom";
import "./Product.css";

// import arrow back icon
import { IoArrowBackCircleOutline } from "react-icons/io5";

// import preview image
import Hb from "./hand_bag_1.png";

// single product component
const Product = () => {

  // remove the nav element
  const removeMainNav2 = () => {
    // get element by id
    const mainNav2: any = document.getElementById("main-nav-2");
    mainNav2.style.display = "none";
  };

  // call remove mani nav 2 function

  return (
    <div id='product' onLoad={removeMainNav2}>
      <div id='product-container'>
        <ol id='product-side-menu'>
          <li className='product-side-menu-item'>
            <NavLink to="/shop">
              <IoArrowBackCircleOutline className='product-back-icon' />
            </NavLink>
          </li>
          <li className='product-side-menu-item'>
            <strong style={{ fontWeight: 500, color: "#415C61" }}>Product/</strong><small>Bag</small>
          </li>
        </ol>
        <div className='product-item-container'>
          <div className='item-image-container'>
            <img src={Hb} alt='' className='product-item-img' />
          </div>
          <div className='item-data-container'>
            <h3 className='product-form-header'>Product Details</h3>
            <form className='product-form'>
              <div className='product-form-group'>
                <label className='product-label-control'>Product Name</label>
                <p className='product-form-control'>Back Pack</p>
              </div>
              <div className='product-form-group'>
                <label className='product-label-control'>Category</label>
                <p className='product-form-control'>Bag</p>
              </div>
              <div className='product-form-group'>
                <label className='product-label-control'>Sex</label>
                <p className='product-form-control'>Female</p>
              </div>
              <div className='product-form-group'>
                <label className='product-label-control'>Description</label>
                <p style={{minHeight: "5em"}} className='product-form-control'>Product details goes here</p>
              </div>
              <div className='product-form-group'>
                <input type='submit' value="Add to Cart" className='product-primary-btn' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;