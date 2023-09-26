import React from 'react';
import "./DropMenu.css";
import { NavLink } from 'react-router-dom';

// Drop down menu
const DropMenu = () => {
    // change/hide close icon on click and remove the menu
    const handleCloseIcon = () => {
        // get the icon by id
        const closeIcon: any = document.getElementById("close-icon");
        closeIcon.style.display = "none";

        // display block the hamburger icon
        const hamburgerIcon: any = document.getElementById("hamburger-icon");
        hamburgerIcon.style.display = "block";

        // hide the dropdown list menu
        const dropDownMenu: any = document.getElementById("drop-menu");
        dropDownMenu.style.display = "none";
    };

    return (
        <div id='drop-menu'>
            <div id='drop-menu-container'>
                <ol id="drop-menu-list">
                    <li className='drop-menu-list-item'>
                        <NavLink to="/" className="drop-menu-list-item-link" onClick={handleCloseIcon}>Home</NavLink>
                    </li>
                    <li className='drop-menu-list-item'>
                        <NavLink to="/" className="drop-menu-list-item-link" onClick={handleCloseIcon}>Shop</NavLink>
                    </li>
                    <li className='drop-menu-list-item'>
                        <NavLink to="/create-product" className="drop-menu-list-item-link" onClick={handleCloseIcon}>Add Product</NavLink>
                    </li>
                    <li className='drop-menu-list-item'>
                        <NavLink to="/blog" className="drop-menu-list-item-link" onClick={handleCloseIcon}>Blog</NavLink>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default DropMenu;