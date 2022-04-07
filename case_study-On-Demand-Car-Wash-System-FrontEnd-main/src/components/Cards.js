import React from 'react';
import './Cards.css';
 import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Best Cleaning Process!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Internal cleaning with dry steam and suction vacuuming using our special car cleaning accessories.'
              label='Impressive Interior'
              path='/sign-up'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Rubbing is a process that results in the removal of stains and marks on the paint surface of the car and gives your car a smooth and clean look.'
              label='Detailing Glow'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='External cleaning with Wet steam and also High Pressure wash using our special car cleaning accessories.'
              label='Ready To Shine'
              path='/sign-up'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Sanitizing is a procedure of proper cleaning and removing virus and germs, it is also a part of Anti-bacterial Treatment.'
              label='Disinfection'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Keeping your car clean is a symbol of loving it. Be ready to shine!.'
              label='High-End Technology'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
