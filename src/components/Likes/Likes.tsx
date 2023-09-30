import React, { useEffect } from 'react';
import "./Likes.css";

const Likes: React.FC = () => {
  // remove the nav element
  const removeMainNav2: any = () => {
    // get element by id
    const mainNav2: any = document.getElementById("main-nav-2");
    if (mainNav2) {
      mainNav2.style.display = "none";
    }
  };

  useEffect(()=>{
    removeMainNav2()
  },[]);

  return (
    <div id='likes'>
      <div id='likes-container'>
        <h5>Likes</h5>
      </div>
    </div>
  );
};

export default Likes;