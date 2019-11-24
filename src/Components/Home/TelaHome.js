import React from 'react';
import './App.css'
import ButtonsHome from '../Buttons/Buttons'
import ejcomp from '../../Imagem/ejcomp.png'
import MenuMobile from '../MenuMobile/MenuMobile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom'

export default class TelaHome extends React.Component {
  render() {
    return (
      <div className="App">
        <div id="containerLogo">
          <img src={ejcomp} alt="logo" /></div>
        <div id="containerButtons" >
          <ButtonsHome nome="HOME" idTexto="texto" Texto='There are many variations of passages of Lorem Ipsum available, but the majority' />
          <ButtonsHome nome="EMPRESA" idTexto="texto2" Texto='There are many variations of passages of Lorem Ipsum available, but the majority ' />
          <Link to='/mej'><ButtonsHome nome="MEJ" idTexto="texto3" Texto='There are many variations of passages of Lorem Ipsum available, but the majority ' /></Link>
          <ButtonsHome nome="SERVIÇOS" idTexto="texto4" Texto='There are many variations of passages of Lorem Ipsum available, but the majority ' />
          <Link to='/equipe'><ButtonsHome nome="EQUIPE" idTexto="texto5" Texto='There are many variations of passages of Lorem Ipsum available, but the majority ' /></Link>
          <ButtonsHome nome="BLOG" idTexto="texto6" Texto='There are many variations of passages of Lorem Ipsum available, but the majority ' />
        </div>
        <div id="menu"> <MenuMobile /> </div>
        <div id="grid-row3">
          <div id="containerApp"><button id="btn3">APLICATIVOS</button></div>
          <div id="containerButtonOrçamento"><button id="btn2">FAÇA UM ORÇAMENTO</button></div>
          <div id="containerIcones">
            <a href="https://www.facebook.com/EJComp.UNESP/?epa=SEARCH_BOX" target="_blank" rel="noopener noreferrer" >
              <FontAwesomeIcon icon={faFacebook} size='2x' color='white' className="IconesMidia" />
            </a>
            <a href="https://www.instagram.com/ejcompunesp/" target="_blank" rel="noopener noreferrer" >
              <FontAwesomeIcon icon={faInstagram} size='2x' color='white' className="IconesMidia" />
            </a>
            <a href="https://pt.linkedin.com/company/ejcomp" target="_blank" rel="noopener noreferrer" >
              <FontAwesomeIcon icon={faLinkedin} size='2x' color='white' borderRadius='30px' className="IconesMidia" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}