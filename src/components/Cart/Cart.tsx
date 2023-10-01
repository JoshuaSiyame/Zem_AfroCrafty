import React, { useEffect } from 'react';
import "./Cart.css";
import { FaTimes } from 'react-icons/fa';

const Cart: React.FC = () => {
  // remove the nav element
  const removeMainNav2: any = () => {
    // get element by id
    const mainNav2: any = document.getElementById("main-nav-2");
    if (mainNav2) {
      mainNav2.style.display = "none";
    }
  };

  useEffect(() => {
    removeMainNav2()
  }, []);

  return (
    <div id='cart'>
      <div id='cart-container'>
        <div id='cart-content'>
          <div id='shopping-cart'>
            <ol id='shopping-cart-header-list'>
              <li className='shopping-cart-header-item'>
                <h2 id='shopping-cart-header'>Shopping Cart</h2>
              </li>
              <li className='shopping-cart-header-item'>
                <h3 id='shopping-cart-header'>3 Items</h3>
              </li>
            </ol>
            <div id='shopping-cart-content'>
              <table>
                <thead>
                  <th>Item name</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Bag</td>
                    <td>2</td>
                    <td>2500</td>
                    <td><FaTimes className='cart-remove-icon' /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id='cart-summary'>
            <h3 id='cart-summary-header'>Order Summary</h3>
            <div id='cart-summary-content'>
              <ol id='cart-summary-list'>
                <li className='cart-summary-list-item'>Items 3</li>
                <li className='cart-summary-list-item'>Tsh: 14500</li>
              </ol>
              <form id='check-out-form'>
                <div className='cart-form-group'>
                  <label className='cart-label-control'>Shipping</label>
                  <select name='delivery-means'>
                    <option value="0">Physical Collection - Tsh: 0</option>
                    <option value="1000">Standard Delivery - Tsh: 1000</option>
                    <option value="2500">Special Delivery - Tsh: 2500</option>
                  </select>
                </div>
                <div className='cart-form-group'>
                  <label className='cart-label-control'>Discount Code</label>
                  <input type='text' placeholder='Enter your discount code..' className='cart-form-control' />
                </div>
                <div className='cart-form-group'>
                  <ol id='cart-summary-list'>
                    <li className='cart-summary-list-item'>Total amount</li>
                    <li className='cart-summary-list-item'>Tsh: 14500</li>
                  </ol>
                </div>
                <div className='cart-form-group'>
                  <input type='submit' value='CHECKOUT' className='cart-primary-btn' />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;