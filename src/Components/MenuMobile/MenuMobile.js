import React from 'react'
import './MenuMobile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { HashLink as Link } from 'react-router-hash-link';
import Contato from '../Contato/Contato'

export default class Barra extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false,
            icon: faBars,
            isVisible: false
        }
    }
    mostrarMenu = () => {
        if (this.state.icon === faBars || this.state.open === false ) {
            this.setState(state => {
                return {
                    open: !state.open,
                    icon: faTimes
                };
            });
        } else this.setState(state => {
            return {
                open: !state.open,
                icon: faBars
            };
        });
    };
    showModal = () => {
        this.setState({ isVisible: true });
    };
    hideModal = () => {
        this.setState({ isVisible: false });
    };
    render() {
        return (
            <React.Fragment>
                <button onClick={this.mostrarMenu} id="dropdown">
                    <FontAwesomeIcon icon={this.state.icon} size='2x' color='gray' />
                </button>
                {this.state.open ?
                    <ul id="menuItens">
                        <div id="containerBtnMenu">
                            <Link smooth to={'/#section1'}><li onClick={this.mostrarMenu}> HOME</li></Link>
                            <Link smooth to={'/#section2'}><li onClick={this.mostrarMenu}>EMPRESA</li></Link>
                            <Link smooth to={'/#section3'}><li onClick={this.mostrarMenu}>MEJ</li></Link>
                            <Link smooth to={'/#section4'}><li onClick={this.mostrarMenu}>SERVIÇOS</li></Link>
                            <Link smooth to={'/portfolio'}><li onClick={this.mostrarMenu}>PORTFOLIO</li></Link>
                            <Link smooth to={'/equipe'}><li onClick={this.mostrarMenu}>EQUIPE</li></Link>
                            <Link smooth to={'blog'}><li onClick={this.mostrarMenu}>BLOG</li></Link>
                            <li onClick={this.showModal}>ORÇAMENTO
                            </li>
                            {this.state.isVisible ?
                                    <Contato click={this.hideModal} />
                                    :
                                    null
                                }
                            <div id="icones">
                                <a href="https://www.facebook.com/EJComp.UNESP/?epa=SEARCH_BOX" target="_blank" rel="noopener noreferrer" >
                                    <FontAwesomeIcon icon={faFacebook} size='lg' color='black' className='midiaMobile' />
                                </a>
                                <a href="https://www.instagram.com/ejcompunesp/" target="_blank" rel="noopener noreferrer" >
                                    <FontAwesomeIcon icon={faInstagram} size='lg' color='black' className='midiaMobile' />
                                </a>
                                <a href="https://pt.linkedin.com/company/ejcomp" target="_blank" rel="noopener noreferrer" >
                                    <FontAwesomeIcon icon={faLinkedin} size='lg' color='black' className='midiaMobile' />
                                </a>
                            </div>
                        </div>
                    </ul>
                    :
                    null
                }
            </React.Fragment>
        )
    }
}