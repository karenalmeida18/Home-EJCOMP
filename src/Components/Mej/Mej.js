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
          <p>  O Movimento Empresa Júnior, representa e engloba um conjunto de empresas juniores. Essas, por sua vez, reúnem jovens determinados e em prol do propósito de transformar o Brasil. As EJ's cumprem papel muito importante na vida desses jovens, formando e desenvolvendo, pessoal e profissionalmente, uma vez que são totalmente geridas por estes alunos. Muito importante também, é o seu impacto na realidade de quem contrata esses serviços, gerando resultados e qualidade sênior, por um preço muito mais acessível.</p>
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
