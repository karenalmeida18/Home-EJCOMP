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
                            <hr size="1" />
                            <Link smooth to={'/#section1'}><li >HOME</li></Link>
                            <Link smooth to={'/#section2'}><li>EMPRESA</li></Link>
                            <Link smooth to={'/#section3'}><li>MEJ</li></Link>
                            <Link smooth to={'/serviços'}><li>SERVIÇOS</li></Link>
                            <Link smooth to={'/portfolio'}><li>PORTFOLIO</li></Link>
                            <Link smooth to={'/equipe'}><li>EQUIPE</li></Link>
                            <li>BLOG</li>
                            <li onClick={this.showModal}>ORÇAMENTO
                            </li>
                            {this.state.isVisible ?
                                    <Contato click={this.hideModal} />
                                    :
                                    null
                                }
                            <hr size="1" />
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