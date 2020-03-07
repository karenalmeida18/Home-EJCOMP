import React from 'react'
import './Login.css'
import logo from '../../Imagem/logo.svg'
import { HashLink as Link } from 'react-router-hash-link';

export default class Login extends React.Component {
    render() {
        return (
            <div className='containerLogin'>
                <div className='Login'>
                    <img src={logo} className='logoLogin' alt='logo' />
                    <input type="Usuario" name="usuario" placeholder="Usuário" required />
                    <input type="Senha" name="senha" placeholder="Senha" required />
                    <div className='Buttons'>
                        <button className='Acessar' type='submit'><Link smooth to={'/painel'}>Acessar</Link></button>
                        <button className='Cadastrar' type='submit'>Cadastrar</button>
                    </div>
                </div>
            </div>

        )
    }
}