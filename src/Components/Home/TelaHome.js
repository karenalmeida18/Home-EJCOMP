import React from 'react';
import './App.css'
import ButtonsHome from '../Buttons/Buttons'
import MenuMobile from '../MenuMobile/MenuMobile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom'
import Contato from '../Contato/Contato'

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
      <div className="App">
        <div id="containerLogo"></div>
        <div id="containerButtons" >
          <ButtonsHome nome="HOME" idTexto="texto"
            Texto='There are many variations of passages of Lorem Ipsum available, but the majority' />
          <Link to ='./empresa'><ButtonsHome nome="EMPRESA" idTexto="texto2"
            Texto='There are many variations of passages of Lorem Ipsum available, but the majority ' /></Link>
          <Link to='/mej'><ButtonsHome nome="MEJ" idTexto="texto3"
            Texto='There are many variations of passages of Lorem Ipsum available, but the majority ' /></Link>
          <Link to='./serviços'><ButtonsHome nome="SERVIÇOS" idTexto="texto4"
            Texto='There are many variations of passages of Lorem Ipsum available, but the majority ' /></Link>
          <Link to='/equipe'><ButtonsHome nome="EQUIPE" idTexto="texto5"
            Texto='There are many variations of passages of Lorem Ipsum available, but the majority ' /></Link>
          <ButtonsHome nome="BLOG" idTexto="texto6"
            Texto='There are many variations of passages of Lorem Ipsum available, but the majority ' />
        </div>
        <div id="menu"> <MenuMobile /> </div> {/*Versao mobile do site */}
        <div id="grid-row3">
          <div id="containerApp"><Link to='/serviços'>
            <button id="btn3" >
              {this.state.string}
            </button></Link>
          </div>
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