import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Appointment from './components/pages/Appointment';
import Login from './components/pages/Login';
import Washer from './components/pages/Washer';
import WasherLogin from './components/pages/WasherLogin';
import Payment from './components/pages/Payment';
import Admin from './components/pages/Admin';

import Adminadd from './components/pages/Adminadd';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/services' exact element={<Services/>} />
          <Route path='/products' exact element={<Products/>} />
          <Route path='/sign-up' exact element={<SignUp/>} />
          <Route path = "/login" exact element = {<Login/>}/>
          <Route path="/appointment" exact element = {<Appointment/>}/>
          <Route path="/washer" exact element = {<Washer/>}/>
           <Route path="/washerlogin" exact element = {<WasherLogin/>}/> 
          <Route path="/payment" exact element = {<Payment/>}/>
          <Route path="/admin" exact element = {<Admin/>}/>
          

          <Route path="/addpacks" exact element = {<Adminadd/>}/>
        </Routes>
      </Router>
     
    </>
  );
}

export default App;
