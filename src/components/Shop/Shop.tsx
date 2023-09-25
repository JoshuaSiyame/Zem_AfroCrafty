import React from 'react';
import "./Shop.css";

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
      </div>
    </div>
  );
};

export default Shop;