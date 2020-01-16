import React from 'react';
import './App.css'
import ButtonsHome from '../Buttons/Buttons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Contato from '../Contato/Contato'
import { HashLink as Link } from 'react-router-hash-link';

export default class TelaHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: 1,
      string: 'APLICATIVOS'
    }
  }
  showModal = () => {
    this.setState({ isVisible: true });
  };
  hideModal = () => {
    this.setState({ isVisible: false });
  };
  timer() {
    switch (this.state.texto) {
      case 1: this.setState({ string: 'APLICATIVOS' }); break;
      case 2: this.setState({ string: 'SITES' }); break;
      case 3: this.setState({ string: 'SISTEMAS' }); break;

    } if (this.state.texto !== 3) this.setState({ texto: this.state.texto + 1 })
    else this.setState({ texto: 1 })
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 3000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <div className="App" id={this.props.id}>
          <div id="containerLogo" className="fadeRight"></div>
        <div id="containerButtons">
          <ButtonsHome nome="HOME" idTexto="texto"
            Texto=' Página inicial' />
          <Link smooth to={'/#section2'}><ButtonsHome nome="EMPRESA" idTexto="texto2"
            Texto=' Conheça mais sobre a EJComp ' /></Link>
          <Link smooth to={'/#section3'}><ButtonsHome nome="MEJ" idTexto="texto3"
            Texto='Movimento Empresa Júnior, saiba mais. ' /></Link>
          <Link smooth to={'/portfolio'}><ButtonsHome nome="PORTFOLIO" idTexto="texto4"
            Texto='Os principais serviços prestados pela EJComp ' /></Link>
          <Link to='/equipe'><ButtonsHome nome="EQUIPE" idTexto="texto5"
            Texto='Conheça quem são os integrantes da Empresa Júnior ' /></Link>
          <Link to='/blog'><ButtonsHome nome="BLOG" idTexto="texto6"
            Texto='Conteúdos, informações e notícias ' /></Link>
        </div>
        <div id="grid-row3">
          <div id="containerApp"><Link smooth to={'/#section4'}>
            <button id="btn3" >
              {this.state.string}
            </button></Link>
          </div>
          <div id="containerButtonOrçamento"><button onClick={this.showModal} id="btn2" className="fadeBottom">FAÇA UM ORÇAMENTO</button>
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