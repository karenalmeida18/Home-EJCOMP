import React from 'react';
import '../Style/App.css';
import { ButtonHome, ButtonEmpresa, ButtonMej, ButtonServiços, ButtonEquipe, ButtonBlog } from './Buttons';
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
          <ButtonHome nome="HOME" />
          <ButtonEmpresa nome="EMPRESA" />
          <ButtonMej nome="MEJ" />
          <ButtonServiços nome="SERVIÇOS" />
          <ButtonEquipe nome="EQUIPE" />
          <ButtonBlog nome="BLOG" />
        </div>
        <div id="containerApp"><button id="btn3">APLICATIVOS</button></div>
        <div id="containerButtonOrçamento"><button id="btn2">FAÇA UM ORÇAMENTO</button></div>
        <div id="menu">
          <MenuMobile/>
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