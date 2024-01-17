import React, {useContext} from 'react';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import Nav from "./Components/NavBar/Nav";
import Home from './Pages/home/Home';
import Footer from "./Components/Footer/Footer"
import About from "./Pages/about/about";
import NotFound from "./Components/NotFound/NotFound";
import FAQS from "./Pages/FAQS/FAQS"
import Products from "./Pages/Products/Products";
function App() {
    return (
        <>
            <Nav/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/Products' element={<Products/>}/>
                <Route path='/FAQS' element={<FAQS/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
            <Footer/>

        </>
    )
        ;
}

export default App;



