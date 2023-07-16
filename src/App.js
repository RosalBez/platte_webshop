import React from 'react';
import './App.css';
// import axios from "axios";
import {Routes, Route} from 'react-router-dom'
import Nav from "./Components/NavBar/Nav";
import Home from './Pages/home/Home';
import Footer from "./Components/Footer/Footer"
import About from "./Pages/about/about";
import Products from "./Pages/ProductsOverview/ProductsOverview";
import Shoppingcart from "./Pages/Shoppingcart/Shoppingcart";
import RegisterSignIn from "./Pages/Register-sign-in/Register_sign_in";
import NotFound from "./Components/NotFound/NotFound";
import FAQS from "./Pages/FAQS/FAQS"
import Armbanden from "./Pages/ProductPage/Armbanden/Armbanden";
import Kettingen from "./Pages/ProductPage/Kettingen/Kettingen";
import Brilkoorden from "./Pages/ProductPage/Brilkoorden/Brilkoorden";
import ProductDetailsArmbanden from './Pages/ProductPage/Armbanden/ProductDetailsArmbanden/ProductDetailsArmbanden'
import ProductDetailsKettingen from './Pages/ProductPage/Kettingen/ProductDetailsKettingen/ProductDetailsKettingen'
import ProductDetailsBrilkoorden from './Pages/ProductPage/Brilkoorden/ProductDetailsBrilkoorden/ProductDetailsBrilkoorden'

function App() {
    return (
        <>

            <Nav/>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/Armbanden' element={<Armbanden/>}/>
                <Route path='/productDetailsArmbanden/:id' element={<ProductDetailsArmbanden/>}/>
                <Route path='/Kettingen' element={<Kettingen/>}/>
                <Route path='/productDetailsKettingen/:id' element={<ProductDetailsKettingen/>}/>
                <Route path='/Brilkoorden' element={<Brilkoorden/>}/>
                <Route path='/productDetailsBrilkoorden/:id' element={<ProductDetailsBrilkoorden/>}/>
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



