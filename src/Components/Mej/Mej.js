import React from 'react';
import './Mej.css'
import Navbar from '../Navbar/Navbar'
import MenuMobile from '../MenuMobile/MenuMobile'

export default function TelaMej() {
  return (
    <div className="TelaMej">
      <Navbar backgroundColor = 'white' logo= 'logoNav' className='itemMenuMej'/>
      <div id="menuMej"> <MenuMobile /> </div>
      <div className="tittle"><p>MEJ</p>
      </div>
      <div className="row-1">
        <div id="LogoBrJr" />
        <div id="TextBrJr">
          <p> is a long established fact that a reader will be distracted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
          looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
          looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
          looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
          looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
          looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
          looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
          of letters, as opposed to using 'Content here, content here', making it look like readable English.
         Many desktop publishing packages and web page.</p>
        </div>
      </div>
      <div className="row-2">
        <div id="TextMej">
          <p >It is a long established fact that a reader will be distracted by the readable content of a page when
           looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
           looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
           looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
           looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
           looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
           looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
           looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
           of letters, as opposed to using 'Content here, content here', making it look like readable English.
         Many desktop publishing packages and web page.</p>
        </div>
        <div id="LogoMej"/>

      </div>
    </div>
  );
}
