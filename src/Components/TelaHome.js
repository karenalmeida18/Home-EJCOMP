import React from 'react';
import '../Style/App.css';
import { ButtonHome, ButtonEmpresa, ButtonMej, ButtonServiços, ButtonEquipe, ButtonBlog } from './Buttons';
import '../Style/Icones.css';
import'../Style/ButtonOrçamento.css'

export default class TelaHome extends React.Component {
  render() {
    return (
      <div className="App">
        <div id="containerLogo">
          <img src="https://www.freelogodesign.org/file/app/client/thumb/1d3862c6-cb0e-43cd-9565-602498128e3c_200x200.png?1565911256246" alt="logo" /></div>
        <div id="containerButtons">
          <ButtonHome nome="HOME" />
          <ButtonEmpresa nome="EMPRESA" />
          <ButtonMej nome="MEJ" />
          <ButtonServiços nome="SERVIÇOS" />
          <ButtonEquipe nome="EQUIPE" />
          <ButtonBlog nome="BLOG" />
        </div>
        <div id="containerButtonOrçamento"><button id="btn2">FAÇA UM ORÇAMENTO</button></div>
        <div id="containerIcones">
          <a href="https://www.facebook.com/EJComp.UNESP/?epa=SEARCH_BOX" target="_blank" rel="noopener noreferrer" ><img id="fb" alt="icone" src="https://icon-icons.com/icons2/791/PNG/32/FB_icon-icons.com_65484.png" /></a>
          <a href="https://www.instagram.com/ejcompunesp/" target="_blank" rel="noopener noreferrer" ><img id="ig" alt="icone" src="https://icon-icons.com/icons2/791/PNG/32/instagram_f_icon-icons.com_65485.png" /></a>
          <a href="https://pt.linkedin.com/company/ejcomp" target="_blank" rel="noopener noreferrer" ><img id="ld" alt="icone" src="https://icon-icons.com/icons2/793/PNG/32/linkedin_icon-icons.com_65588.png" /></a>
        </div>
      </div>
    );
  }
}