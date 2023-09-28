// import modules/packages
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";

// import made components
import Product from './Product/Product';
import Shop from './Shop/Shop';
import Accessories from './Accessories/Accessories';
import CreateProduct from './CreateProduct/CreateProduct';
import Women from './Women/Women';
import Men from './Men/Men';
import GoPro from './GoPro/GoPro';
import Others from './Others/Others';
import CheckOut from './CheckOut/CheckOut';
import Profile from './Profile/Profile';
import Cart from './Cart/Cart';
import Likes from './Likes/Likes';
import Blog from './Blog/Blog';
import Footer from './Utils/Footer/Footer';
import NavOne from './Utils/NavOne/NavOne';
import NavTwo from './Utils/NavTwo/NavTwo';

// App structure
const App = () => {
    return (
        <div id='app-structure'>
            <BrowserRouter>
                <NavOne />                
                <NavTwo />
                <Routes>
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/likes' element={<Likes />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/checkout' element={<CheckOut />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/product' element={<Product />} />
                    <Route path='/'>
                        <Route path='/' element={<Shop />} index />
                        <Route path='/accessories' element={<Accessories />} />
                        <Route path='/create-product' element={<CreateProduct />} />
                        <Route path='/women' element={<Women />} />
                        <Route path='/men' element={<Men />} />
                        <Route path='/go-pro' element={<GoPro />} />
                        <Route path='/others' element={<Others />} />
                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;