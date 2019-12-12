import React from 'react';
import './App.css'
import ButtonsHome from '../Buttons/Buttons'
import ejcomp from '../../Imagem/logoazul.png'
import MenuMobile from '../MenuMobile/MenuMobile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom'
import Contato from '../Contato/Contato'

export default class TelaHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  showModal = () => {
    this.setState({ isVisible: true });
  };
  hideModal = () => {
    this.setState({ isVisible: false });
  };
  render() {
    return (
      <div className="App">
        <div id="containerLogo">
          <img id="logoPrincipal" src={ejcomp} alt="logo" /></div>
        <div id="containerButtons" >
          <ButtonsHome nome="HOME" idTexto="texto" Texto='There are many variations of passages of Lorem Ipsum available, but the majority' />
          <ButtonsHome nome="EMPRESA" idTexto="texto2" Texto='There are many variations of passages of Lorem Ipsum available, but the majority ' />
          <Link to='/mej'><ButtonsHome nome="MEJ" idTexto="texto3" Texto='There are many variations of passages of Lorem Ipsum available, but the majority ' /></Link>
          <ButtonsHome nome="SERVIÇOS" idTexto="texto4" Texto='There are many variations of passages of Lorem Ipsum available, but the majority ' />
          <Link to='/equipe'><ButtonsHome nome="EQUIPE" idTexto="texto5" Texto='There are many variations of passages of Lorem Ipsum available, but the majority ' /></Link>
          <ButtonsHome nome="BLOG" idTexto="texto6" Texto='There are many variations of passages of Lorem Ipsum available, but the majority ' />
        </div>
        {/*Versao mobile do site */}
        <div id="menu"> <MenuMobile /> </div>
        <div id="grid-row3">
          <div id="containerApp"><button id="btn3">APLICATIVOS</button></div>
          <div id="containerButtonOrçamento"><button onClick={this.showModal} id="btn2">FAÇA UM ORÇAMENTO</button>
            {this.state.isVisible ?
              <Contato click={this.hideModal} />
              : null
            }
          </div>
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