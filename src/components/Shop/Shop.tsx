import React from 'react';
import "./Shop.css";

// import images
import HB1 from "./hand_bag_1.png";
import HB2 from "./hand_bag_2.jpg";
import NO from "./natural_oil.jpg";

const Shop = () => {
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
              <option value="priceLowHigh"><small>Low - High Price</small></option>
              <option value="priceHighLow"><small>High - Low Price</small></option>
            </select>
          </li>
        </ol>
        <div id='shop-items'>
          <div id='' className='item-card'>
            <img src={HB1} alt='' className='item-img' />
            <h3 className='item-name'><small>Item name</small></h3>
            <p className='item-price'><small>Tz: 2500/=</small></p>
          </div>          
          <div id='' className='item-card'>
            <img src={NO} alt='' className='item-img' />
            <h3 className='item-name'><small>Item name</small></h3>
            <p className='item-price'><small>Tz: 2500/=</small></p>
          </div>
          <div id='' className='item-card'>
            <img src={HB1} alt='' className='item-img' />
            <h3 className='item-name'><small>Item name</small></h3>
            <p className='item-price'><small>Tz: 2500/=</small></p>
          </div>
          <div id='' className='item-card'>
            <img src={NO} alt='' className='item-img' />
            <h3 className='item-name'><small>Item name</small></h3>
            <p className='item-price'><small>Tz: 2500/=</small></p>
          </div>
          <div id='' className='item-card'>
            <img src={HB1} alt='' className='item-img' />
            <h3 className='item-name'><small>Item name</small></h3>
            <p className='item-price'><small>Tz: 2500/=</small></p>
          </div>
          <div id='' className='item-card'>
            <img src={NO} alt='' className='item-img' />
            <h3 className='item-name'><small>Item name</small></h3>
            <p className='item-price'><small>Tz: 2500/=</small></p>
          </div>
          <div id='' className='item-card'>
            <img src={HB1} alt='' className='item-img' />
            <h3 className='item-name'><small>Item name</small></h3>
            <p className='item-price'><small>Tz: 2500/=</small></p>
          </div>
          <div id='' className='item-card'>
            <img src={NO} alt='' className='item-img' />
            <h3 className='item-name'><small>Item name</small></h3>
            <p className='item-price'><small>Tz: 2500/=</small></p>
          </div>
          <div id='' className='item-card'>
            <img src={HB1} alt='' className='item-img' />
            <h3 className='item-name'><small>Item name</small></h3>
            <p className='item-price'><small>Tz: 2500/=</small></p>
          </div>
          <div id='' className='item-card'>
            <img src={NO} alt='' className='item-img' />
            <h3 className='item-name'><small>Item name</small></h3>
            <p className='item-price'><small>Tz: 2500/=</small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;