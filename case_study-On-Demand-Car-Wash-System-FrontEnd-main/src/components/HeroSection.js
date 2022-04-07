import React from 'react';

import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import {useNavigate} from 'react-router-dom';


function HeroSection() {

 let navigate = useNavigate()

  const Book = () => {

     navigate("/appointment")

  }


  return (


    <div className='hero-container'>
           <h1>We love to shine cars. Book now to feel the experience</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>

    
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'

          onClick={Book}
        >
          Book a Wash
        </Button>
       
      </div>
    </div>
  );
}


export default HeroSection;
