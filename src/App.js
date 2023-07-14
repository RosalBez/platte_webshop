import React from 'react';
import './App.css';
// import axios from "axios";
import {Routes, Route} from 'react-router-dom'
import Nav from "./Components/NavBar/Nav";
import Home from './Pages/home/Home';
import Footer from "./Components/Footer/Footer"
import About from "./Pages/about/about";
import Products from "./Pages/Products/Products";
import Shoppingcart from "./Pages/Shoppingcart/Shoppingcart";
import RegisterSignIn from "./Pages/Register-sign-in/Register_sign_in";
import NotFound from "./Components/NotFound/NotFound";
import FAQS from "./Pages/FAQS/FAQS"

function App() {
    return (
        <>

            <Nav/>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/products' element={<Products/>}/>
                {/*<Route path='/product-page/:id' element={<ProductPage/>}*/}
                <Route path='/RegisterSignIn' element={<RegisterSignIn/>}/>
                <Route path='/shoppingcart' element={<Shoppingcart/>}/>
                <Route path='/FAQS' element={<FAQS/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>

            <Footer/>


        </>
    )
        ;
}

export default App;



