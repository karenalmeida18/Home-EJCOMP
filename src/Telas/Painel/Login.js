import React from 'react'
import './Login.css'
import logo from '../../Imagem/logo.svg'
import api from '../../Services/api'
import { login } from "../../Services/auth";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            border: '1px solid white',
            msg:''
        }
    }
    handleChangeEmail = event => {
        this.setState({ email: event.target.value });
    }

    handleChangePassword = event => {
        this.setState({ password: event.target.value });
    }

    authenticateLogin = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        if (!email || !password) {
                this.setState({msg: 'Preencha todos os campos para continuar.'})
        }
        else {
            try {
               const response =  await api.post("/auth/authenticate", { email, password });
                this.setState({border: '1px solid green'})
                console.log(response);
                login(response.data.token);
                this.props.history.push("/painel");
            }
            catch (error) {
                this.setState({border: '1px solid red', msg: 'Usuário inexistente.'})
                console.error(error);
            }
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({border: '1px solid white'})
        const { email, password } = this.state;
        if (!email || !password) {
            alert('Preencha todos os campos para continuar.')
        }
        else {
            api.post(`/auth/register`, { email, password })
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
                         <div style={{color: 'red', fontSize: '15pt', textAlign: 'center'}}>{this.state.msg}</div>
                    <input type="name" name="email" placeholder="email" style={{ border: this.state.border }} value={this.state.email}
                        onChange={this.handleChangeEmail} required />
                    <input type="password" name="password" style={{ border: this.state.border }} placeholder="password"
                        onChange={this.handleChangePassword} required value={this.state.senha} />
                    <div className='Buttons'>
                        <button onClick={this.authenticateLogin} className='Acessar' type='submit'>Acessar</button>
                        <button onClick={this.handleSubmit} className='Cadastrar' type='submit'>Cadastrar</button>
                    </div>
                </div>
            </div>

        )
    }
}