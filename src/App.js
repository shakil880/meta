import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home.js';
import AboutUs from './pages/AboutUs.js';
import OrderPage from './pages/OrderPage.js';
import OrderConfirmation from './pages/OrderConfirmation.js';

// import Header from './components/Header.js';
// import Hero from './components/Hero.js';
// import Main from './components/Main.js';
// import BookingForm from './components/BookingForm.js';





function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<AboutUs />}/>
        <Route path='/order' element={<OrderPage />}/>
        <Route path='/orderconfirm' element={<OrderConfirmation />}/>
      </Routes>
      {/* <Header />
      <Hero />
      <Main />
      <BookingForm /> */}
    </>
  );
}

export default App;
