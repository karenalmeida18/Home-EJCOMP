import React from 'react'
import './Login.css'
import logo from '../../Imagem/logo.svg'
import { HashLink as Link } from 'react-router-hash-link';
import axios from 'axios';

export default class Login extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            nome: '',
            senha: '',
        }
    }
    handleSubmit = (event) => {
        
        event.preventDefault();
        const{nome, senha} = this.state;
        if(!nome || !senha){
         alert("Preencha todos os campos!")
        }else {
            alert('Mensagem enviada com sucesso!')
            axios.post('https://api-ejcomp-site.herokuapp.com/auth/register') 
            .then(function(response){
                console.log(response);
            })
            .catch(function(error){
                console.log(error);
                console.log(nome);
                console.log(senha);
            });
        
        }
       
    }
    handleChangeNome = (e) =>{
        this.setState ({email: e.target.value})
        this.setState ({nome: e.target.value})
    }
    handleChangeSenha = (e) =>{
        this.setState ({senha: e.target.value})
    }

    
    render() {
        return (
            <div className='containerLogin'>
                <div className='Login'>
                    <img src={logo} className='logoLogin' alt='logo' />
                    <input type="Usuario" name="usuario" placeholder="Usuário" id= 'usuario' value={this.state.nome} 
                    onChange={this.handleChangeNome} required />
                    <input type="password" name="senha" placeholder="Senha" id ='senha'value={this.state.senha}
                     onChange={this.handleChangeSenha} required />
                    <div className='Buttons'>
                        <button className='Acessar' type='submit'><Link smooth to={'/painel'}>Acessar</Link></button>
                        <button onClick={this.handleSubmit} className='Cadastrar' type='submit'>Cadastrar</button>
                    </div>
                </div>
            </div>

        )
    }
}