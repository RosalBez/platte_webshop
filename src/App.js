import React, {useContext} from 'react';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import Nav from "./Components/NavBar/Nav";
import Home from './Pages/home/Home';
import Footer from "./Components/Footer/Footer"
import About from "./Pages/about/about";
import Products from "./Pages/ProductsOverview/ProductsOverview";
import Shoppingcart from "./Pages/Shoppingcart/Shoppingcart";
import RegisterSignIn from "./Pages/Register-sign-in/Register_sign_in";
import NotFound from "./Components/NotFound/NotFound";
import FAQS from "./Pages/FAQS/FAQS"
import Armbanden from "./Pages/ProductPage/Armbanden";
import Kettingen from "./Pages/ProductPage/Kettingen";
import Brilkoorden from "./Pages/ProductPage/Brilkoorden";
import Profiel from "./Pages/Register-sign-in/Profiel/Profiel";
import Wensenlijst from "./Pages/Register-sign-in/Wensenlijst/Wensenlijst";
import GebruikersGegevens from "./Pages/Register-sign-in/mijn gegevens/gebruikers_gegevens";
import {AuthenticationContext} from "./context/AuthenticationProvider/AuthenticationContext";
import ProductDetails from "./Pages/ProductPage/ProductDetails";
import Bestellingen from "./Pages/Register-sign-in/bestellingen/bestellingen";


function App() {
    const {isAuth} = useContext(AuthenticationContext)
    console.log(isAuth)

    return (
        <>

            <Nav/>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/Armbanden' element={<Armbanden/>}/>
                <Route path='/Kettingen' element={<Kettingen/>}/>
                <Route path='/Brilkoorden' element={<Brilkoorden/>}/>
                <Route path="/products/:productId" element={<ProductDetails/>} />



                <Route path='/RegisterSignIn' element={<RegisterSignIn/>}/>
                <Route path='/Profiel' element={ isAuth ? <Profiel/> : <Navigate/>}/>
                <Route path='/Wensenlijst' element={ isAuth ? <Wensenlijst/> : <Navigate/>}/>
                <Route path='/Bestellingen' element={ isAuth ? <Bestellingen/> : <Navigate/>}/>
                <Route path='/Profiel/GebruikersGegevens' element={ isAuth ? <GebruikersGegevens/> : <Navigate/>}/>
                <Route path='/Profiel/Wensenlijst' element={ isAuth ? <Wensenlijst/> : <Navigate/>}/>
                <Route path='/Profiel/Bestellingen' element={ isAuth ? <Bestellingen/> : <Navigate/>}/>

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



