import React from 'react'
import './Login.css'
import logo from '../../Imagem/logo.svg'
import { HashLink as Link } from 'react-router-hash-link';
import axios from 'axios';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    handleChangeEmail = event => {
        this.setState({ email: event.target.value });
    }

    handleChangePassword = event => {
        this.setState({ password: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state;
        if (!email || !password) {
            alert('Preencha todos os campos para continuar.')
        } else {
            axios.post(`https://api-ejcomp-site.herokuapp.com/auth/register`, { email, password })
                .then(function (response) {
                    console.log(response);
                    alert('Usuário cadastrado com sucesso.')
                })
                .catch(function (error) {
                    console.log(error);
                    alert('Usuário já existente.')
                });
        }

    }
    render() {
        return (
            <div className='containerLogin'>
                <div className='Login'>
                    <img src={logo} className='logoLogin' alt='logo' />
                    <input type="name" name="email" placeholder="email" value={this.state.email}
                        onChange={this.handleChangeEmail} required />
                    <input type="password" name="password" placeholder="password"
                        onChange={this.handleChangePassword} required value={this.state.senha} />
                    <div className='Buttons'>
                        <button className='Acessar' type='submit'><Link smooth to={'/painel'}>Acessar</Link></button>
                        <button onClick={this.handleSubmit} className='Cadastrar' type='submit'>Cadastrar</button>
                    </div>
                </div>
            </div>

        )
    }
}