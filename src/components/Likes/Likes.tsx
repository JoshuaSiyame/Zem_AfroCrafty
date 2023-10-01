import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./Likes.css";

// import images
import HB1 from "./hand_bag_1.png";
import NO from "./natural_oil.jpg";

const Likes: React.FC = () => {
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
    <div id='likes'>
      <div id='likes-container'>
        <div id='liked-items'>
          <NavLink to="/product" className="liked-item-card-link">
            <div id='' className='liked-item-card'>
              <img src={HB1} alt='' className='liked-item-img' />
              <h3 className='liked-item-name'><small>Item name</small></h3>
              <p className='liked-item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="liked-item-card-link">
            <div id='' className='liked-item-card'>
              <img src={NO} alt='' className='liked-item-img' />
              <h3 className='liked-item-name'><small>Item name</small></h3>
              <p className='liked-item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="liked-item-card-link">
            <div id='' className='liked-item-card'>
              <img src={HB1} alt='' className='liked-item-img' />
              <h3 className='liked-item-name'><small>Item name</small></h3>
              <p className='liked-item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="liked-item-card-link">
            <div id='' className='liked-item-card'>
              <img src={NO} alt='' className='liked-item-img' />
              <h3 className='liked-item-name'><small>Item name</small></h3>
              <p className='liked-item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="liked-item-card-link">
            <div id='' className='liked-item-card'>
              <img src={HB1} alt='' className='liked-item-img' />
              <h3 className='liked-item-name'><small>Item name</small></h3>
              <p className='liked-item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="liked-item-card-link">
            <div id='' className='liked-item-card'>
              <img src={NO} alt='' className='liked-item-img' />
              <h3 className='liked-item-name'><small>Item name</small></h3>
              <p className='liked-item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="liked-item-card-link">
            <div id='' className='liked-item-card'>
              <img src={HB1} alt='' className='liked-item-img' />
              <h3 className='liked-item-name'><small>Item name</small></h3>
              <p className='liked-item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="liked-item-card-link">
            <div id='' className='liked-item-card'>
              <img src={NO} alt='' className='liked-item-img' />
              <h3 className='liked-item-name'><small>Item name</small></h3>
              <p className='liked-item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="liked-item-card-link">
            <div id='' className='liked-item-card'>
              <img src={HB1} alt='' className='liked-item-img' />
              <h3 className='liked-item-name'><small>Item name</small></h3>
              <p className='liked-item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
          <NavLink to="/product" className="liked-item-card-link">
            <div id='' className='liked-item-card'>
              <img src={NO} alt='' className='liked-item-img' />
              <h3 className='liked-item-name'><small>Item name</small></h3>
              <p className='liked-item-price'><small>Tshs: 2500/=</small></p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Likes;