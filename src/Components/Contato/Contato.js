import React from 'react';
import './Contato.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default class Modal extends React.Component {
    render() {
        return (
            <div className="modal">
                <form className="modalForms">
                    <div className="Header">
                        <FontAwesomeIcon icon={faTimes} color="black" className="Cancel" onClick={this.props.click} />
                        <p>Contato</p>
                    </div>
                    <div className='contentForms'>
                        <div className='formsColumn1'>
                            <input type="text" name="name" placeholder="Nome*" required />
                            <input type="email" name="email" placeholder="E-mail*" required />
                            <input type="tel" name="tel" placeholder="Telefone" />
                        </div>
                        <textarea type="text" name="text" placeholder="Mensagem*" required />
                    </div>
                    <button onClick={this.props.click} className="envio" type="submit">Enviar</button>
                </form>
            </div>
        );
    }
}