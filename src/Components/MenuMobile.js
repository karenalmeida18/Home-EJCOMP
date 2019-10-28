import React from 'react'
import '../Style/MenuMobile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default class Barra extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false,
            icon: faBars,
        }
    }
    mostrarMenu = () => {
        if (this.state.icon === faBars) {
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
    render() {
        return (
            <React.Fragment>
                <button onClick={this.mostrarMenu} id="dropdown">
                    <FontAwesomeIcon icon={this.state.icon} size ='2x' color='gray' />
                </button>
                {this.state.open ?
                    <ul id="menuItens">
                        <div id="containerBtnMenu">
                            <hr size="1" />
                            <li>HOME</li>
                            <li>EMPRESA</li>
                            <li>MEJ</li>
                            <li>SERVIÇOS</li>
                            <li>EQUIPE</li>
                            <li>BLOG</li>
                            <li>ORÇAMENTO</li>
                            <hr size="1" />
                            <div id="icones">
                                <a href="https://www.facebook.com/EJComp.UNESP/?epa=SEARCH_BOX" target="_blank" rel="noopener noreferrer" >
                                    <FontAwesomeIcon icon={faFacebook} size='lg' color='black' className='midiaMobile'/>
                                </a>
                                <a href="https://www.instagram.com/ejcompunesp/" target="_blank" rel="noopener noreferrer" >
                                    <FontAwesomeIcon icon={faInstagram} size='lg' color='black' className='midiaMobile' />
                                </a>
                                <a href="https://pt.linkedin.com/company/ejcomp" target="_blank" rel="noopener noreferrer" >
                                    <FontAwesomeIcon icon={faLinkedin} size='lg' color='black' className='midiaMobile'/>
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