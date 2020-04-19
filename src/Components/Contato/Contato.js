import React from 'react';
import './Contato.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import emailjs from 'emailjs-com'

export default class Modal extends React.Component {
    state = {
        nome: '',
        email: '',
        mensagem: '',
        tel: '',
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const { email, nome, mensagem, tel } = this.state;
        if (!email || !nome || !mensagem) {
            alert("Preencha todos os campos!")
        } else {
            let templateParams = {
                user_name: nome,
                user_email: email,
                message: mensagem,
                user_tel: tel
            }
            emailjs.send('default_service', 'teste', templateParams, 'user_CJMfwqGMQppqJUM2WvUMs');
            this.setState({ nome: '', email: '', mensagem: '', tel: '', isVisible: false })
            alert('Mensagem enviada com sucesso!')
        }
    }
    handleChangeEmail = (e) => {
        this.setState({ email: e.target.value, })
    }
    handleChangeNome = (e) => {
        this.setState({ nome: e.target.value, })
    }
    handleChangeTel = (e) => {
        this.setState({ tel: e.target.value, })
    }
    handleChangeMensagem = (e) => {
        this.setState({ mensagem: e.target.value, })
    }
    render() {
        return (
            <div className="modal" onSubmit={this.handleSubmit}>
                <form className="modalForms">
                    <div className="Header">
                        <FontAwesomeIcon icon={faTimes} color="black" className="Cancel" onClick={this.props.click} />
                        <p>Contato</p>
                    </div>
                    <div className='contentForms'>
                        <div className='formsColumn1'>
                            <input type="text" name="name" placeholder="Nome*"
                                value={this.state.nome} onChange={this.handleChangeNome} />
                            <input type="email" name="email" placeholder="E-mail*"
                                value={this.state.email}
                                onChange={this.handleChangeEmail} />
                            <input type="tel" name="tel" placeholder="Telefone"
                                value={this.state.tel}
                                onChange={this.handleChangeTel} />
                        </div>
                        <textarea type="text" name="text" placeholder="Mensagem*"
                            value={this.state.mensagem}
                            onChange={this.handleChangeMensagem} />
                    </div>
                    <button onClick={this.handleSubmit} className="envio" type="submit">Enviar</button>
                </form>
            </div>
        );
    }
}