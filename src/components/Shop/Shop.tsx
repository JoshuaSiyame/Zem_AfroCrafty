import React, { useEffect } from 'react';
import "./Shop.css";

// import images
import HB1 from "./hand_bag_1.png";
import NO from "./natural_oil.jpg";
import { NavLink } from 'react-router-dom';

const Shop = () => {
  // add the main nav 2 element
  const addMainNav2: any = () => {
    // get element by id
    const mainNav2: any = document.getElementById("main-nav-2");
    
    // check element presence
    if (mainNav2) {
      mainNav2.style.display = "flex";
    };
  };

  // use effect to call the function on component render
  useEffect(()=>{
    addMainNav2()
  },[]);

  return (
    <div id="shop">
      <div id='shop-container'>
        <ol id='shop-info-list'>
          <li className='shop-info-list-item' id='left-shop-item'>Showing: 15/20 Items</li>
          <li className='shop-info-list-item' id='right-shop-item'>
            <select name='item-sorting'>
              <option value="">Sort By:</option>
              <option value="latest">Latest</option>
              <option value="old">Old</option>
              <option value="priceLowHigh">Low - High Price</option>
              <option value="priceHighLow">High - Low Price</option>
            </select>
          </li>
        </ol>
        <div id='shop-items'>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={HB1} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={NO} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={HB1} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={NO} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={HB1} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={NO} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={HB1} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={NO} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={HB1} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={NO} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={HB1} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={NO} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={HB1} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={NO} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={HB1} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={NO} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={HB1} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={NO} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={HB1} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={NO} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={HB1} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={NO} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={HB1} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={NO} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <s style={{ color: "red" }}>
                <p className='item-price'><small>Tshs: 2500/=</small></p>
              </s>
              <p className='item-price'><small>Tshs: 1500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={HB1} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={NO} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={HB1} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={NO} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={HB1} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={NO} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={HB1} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={NO} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={HB1} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={NO} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={HB1} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="item-card-link">
            <div id='' className='item-card'>
              <img src={NO} alt='' className='item-img' />
              <h3 className='item-name'><small>Item name</small></h3>
              <p className='item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Shop;