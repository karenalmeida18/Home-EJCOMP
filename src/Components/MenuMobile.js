import React from 'react'
import barra from '../Imagem/barra.png'
import '../Style/MenuMobile.css'
import icone from '../Imagem/iconeMobile.png'
import facebook from '../Imagem/facebook.png'
import instagram from '../Imagem/instagram.png'
import linkedin from '../Imagem/linkedin.png'

export default class Barra extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false,
        }
    }
    mostrarMenu = () => {
        this.setState(state => {
            return {
                open: !state.open
            };
        });
    };
    esconderMenu = event => {
        this.setState(state => {
            return {
                open: !state.open
            };
        });
    }
    render() {
        return (
            <React.Fragment>
                <button onClick={this.mostrarMenu} id="dropdown"><img src={barra} /></button>
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
                            <a href="https://www.facebook.com/EJComp.UNESP/?epa=SEARCH_BOX" target="_blank" rel="noopener noreferrer" ><img id="face" alt="icone" src={facebook} /></a>
                            <a href="https://www.instagram.com/ejcompunesp/" target="_blank" rel="noopener noreferrer" ><img id="insta" alt="icone" src={instagram} /></a>
                            <a href="https://pt.linkedin.com/company/ejcomp" target="_blank" rel="noopener noreferrer" ><img id="linkd" alt="icone" src={linkedin} /></a>
                        </div>
                        <button onClick={this.esconderMenu} id="icone"><img alt="fechar" src={icone} /></button>
                       </div>
                    </ul>
                    :
                    null
                }
            </React.Fragment>
        )
    }
}