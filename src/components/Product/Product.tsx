import React from 'react';
import { NavLink } from "react-router-dom";
import "./Product.css";

// import arrow back icon
import { IoArrowBackCircleOutline } from "react-icons/io5";

// import preview image
import HB1 from "./hand_bag_1.png";
import NO from "./natural_oil.jpg"

// single product component
const Product: React.FC = () => {

  // handle form submit
  const handleFormSubmit = (e: any) => {
    e.preventDefault();
  };

  // states to acquire submitted data

  // remove the nav element
  const removeMainNav2 = () => {
    // get element by id
    const mainNav2: any = document.getElementById("main-nav-2");
    mainNav2.style.display = "none";
  };

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
            <img src={HB1} alt='' className='product-item-img' />
          </div>
          <div className='item-data-container'>
            <h3 className='product-form-header'>Product Details</h3>
            <form className='product-form' onSubmit={handleFormSubmit}>
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
                <p style={{ minHeight: "5em" }} className='product-form-control'>Product details goes here</p>
              </div>
              <div className='product-form-group'>
                <input type='submit' value="Add to Cart" className='product-primary-btn' />
              </div>
              <div className='product-form-group' >
                <input type='submit' value="Add to wish list" className='product-primary-btn-2' />
              </div>
            </form>
          </div>
        </div>
        <h3 className='similar-products-header'>Similar Products</h3>
        <div id='similar-products-container'>
          <NavLink to="/product" className="similar-product-item-card-link">
            <div id='' className='similar-product-item-card'>
              <img src={HB1} alt='' className='similar-product-item-img' />
              <h3 className='similar-product-item-name'><small>Item name</small></h3>
              <p className='similar-product-item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="similar-product-item-card-link">
            <div id='' className='similar-product-item-card'>
              <img src={NO} alt='' className='similar-product-item-img' />
              <h3 className='similar-product-item-name'><small>Item name</small></h3>
              <p className='similar-product-item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="similar-product-item-card-link">
            <div id='' className='similar-product-item-card'>
              <img src={HB1} alt='' className='similar-product-item-img' />
              <h3 className='similar-product-item-name'><small>Item name</small></h3>
              <p className='similar-product-item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="similar-product-item-card-link">
            <div id='' className='similar-product-item-card'>
              <img src={NO} alt='' className='similar-product-item-img' />
              <h3 className='similar-product-item-name'><small>Item name</small></h3>
              <p className='similar-product-item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="similar-product-item-card-link">
            <div id='' className='similar-product-item-card'>
              <img src={HB1} alt='' className='similar-product-item-img' />
              <h3 className='similar-product-item-name'><small>Item name</small></h3>
              <p className='similar-product-item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="similar-product-item-card-link">
            <div id='' className='similar-product-item-card'>
              <img src={NO} alt='' className='similar-product-item-img' />
              <h3 className='similar-product-item-name'><small>Item name</small></h3>
              <p className='similar-product-item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="similar-product-item-card-link">
            <div id='' className='similar-product-item-card'>
              <img src={HB1} alt='' className='similar-product-item-img' />
              <h3 className='similar-product-item-name'><small>Item name</small></h3>
              <p className='similar-product-item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="similar-product-item-card-link">
            <div id='' className='similar-product-item-card'>
              <img src={NO} alt='' className='similar-product-item-img' />
              <h3 className='similar-product-item-name'><small>Item name</small></h3>
              <p className='similar-product-item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="similar-product-item-card-link">
            <div id='' className='similar-product-item-card'>
              <img src={HB1} alt='' className='similar-product-item-img' />
              <h3 className='similar-product-item-name'><small>Item name</small></h3>
              <p className='similar-product-item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="similar-product-item-card-link">
            <div id='' className='similar-product-item-card'>
              <img src={NO} alt='' className='similar-product-item-img' />
              <h3 className='similar-product-item-name'><small>Item name</small></h3>
              <p className='similar-product-item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="similar-product-item-card-link">
            <div id='' className='similar-product-item-card'>
              <img src={HB1} alt='' className='similar-product-item-img' />
              <h3 className='similar-product-item-name'><small>Item name</small></h3>
              <p className='similar-product-item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="similar-product-item-card-link">
            <div id='' className='similar-product-item-card'>
              <img src={NO} alt='' className='similar-product-item-img' />
              <h3 className='similar-product-item-name'><small>Item name</small></h3>
              <p className='similar-product-item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="similar-product-item-card-link">
            <div id='' className='similar-product-item-card'>
              <img src={HB1} alt='' className='similar-product-item-img' />
              <h3 className='similar-product-item-name'><small>Item name</small></h3>
              <p className='similar-product-item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="similar-product-item-card-link">
            <div id='' className='similar-product-item-card'>
              <img src={NO} alt='' className='similar-product-item-img' />
              <h3 className='similar-product-item-name'><small>Item name</small></h3>
              <p className='similar-product-item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="similar-product-item-card-link">
            <div id='' className='similar-product-item-card'>
              <img src={HB1} alt='' className='similar-product-item-img' />
              <h3 className='similar-product-item-name'><small>Item name</small></h3>
              <p className='similar-product-item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="similar-product-item-card-link">
            <div id='' className='similar-product-item-card'>
              <img src={NO} alt='' className='similar-product-item-img' />
              <h3 className='similar-product-item-name'><small>Item name</small></h3>
              <p className='similar-product-item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Product;