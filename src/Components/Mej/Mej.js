import React from 'react';
import './Mej.css'
import LogoBrJr from '../../Imagem/logo_brasiljr.jpg'
import LogoMej from '../../Imagem/mej.png'

export default function TelaMej() {
  return (
    <div className="TelaMej">
      <div className="tittle"><p>MEJ</p>
      </div>
      <div className="row-1">
        <img src={LogoBrJr} id="LogoBrJr" alt="logo" />
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
        <img src={LogoMej} id="LogoMej" alt="logo" />

      </div>
    </div>
  );
}
