import React from 'react';
import '../Style/App.css';
import ButtonsHome from './Buttons';
import ejcomp from '../Imagem/ejcomp.png'
import facebook from '../Imagem/facebook.png'
import instagram from '../Imagem/instagram.png'
import linkedin from '../Imagem/linkedin.png'
import MenuMobile from '../Components/MenuMobile'

export default class TelaHome extends React.Component {
  render() {
    return (
      <div className="App">
        <div id="containerLogo">
          <img src={ejcomp} alt="logo" /></div>
        <div id="containerButtons">
          <ButtonsHome nome="HOME" idTexto="texto" Texto='There are many variations of passages of Lorem Ipsum available, but the majority' />
          <ButtonsHome nome="EMPRESA" idTexto="texto2" Texto='There are many variations of passages of Lorem Ipsum available, but the majority ' />
          <ButtonsHome nome="MEJ" idTexto="texto3" Texto='There are many variations of passages of Lorem Ipsum available, but the majority ' />
          <ButtonsHome nome="SERVIÇOS" idTexto="texto4" Texto='There are many variations of passages of Lorem Ipsum available, but the majority ' />
          <ButtonsHome nome="EQUIPE" idTexto="texto5" Texto='There are many variations of passages of Lorem Ipsum available, but the majority ' />
          <ButtonsHome nome="BLOG" idTexto="texto6" Texto='There are many variations of passages of Lorem Ipsum available, but the majority ' />
        </div>
        <div id="containerApp"><button id="btn3">APLICATIVOS</button></div>
        <div id="containerButtonOrçamento"><button id="btn2">FAÇA UM ORÇAMENTO</button></div>
        <div id="menu">
          <MenuMobile />
        </div>
        <div id="containerIcones">
          <a href="https://www.facebook.com/EJComp.UNESP/?epa=SEARCH_BOX" target="_blank" rel="noopener noreferrer" ><img id="fb" alt="icone" src={facebook} /></a>
          <a href="https://www.instagram.com/ejcompunesp/" target="_blank" rel="noopener noreferrer" ><img id="ig" alt="icone" src={instagram} /></a>
          <a href="https://pt.linkedin.com/company/ejcomp" target="_blank" rel="noopener noreferrer" ><img id="ld" alt="icone" src={linkedin} /></a>
        </div>
      </div>
    );
  }
}