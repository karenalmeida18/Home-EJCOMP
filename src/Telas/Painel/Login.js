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
            token: '',
            border: '1px solid white',
            msg: '',
            displayPassword: 'none',
            displayLogin: 'flex',
            displayReset: 'none'
        }
    }
    handleChangeEmail = event => {
        this.setState({ email: event.target.value });
    }

    handleChangePassword = event => {
        this.setState({ password: event.target.value });
    }
    handleChangeToken = event => {
        this.setState({ token: event.target.value });
    }

    showLogin = () => {
        this.setState({ displayLogin: 'flex', displayPassword: 'none', msg: '', displayReset: 'none' });
    }
    showPassword = () => {
        this.setState({ displayLogin: 'none', displayPassword: 'flex', displayReset: 'none' });
    }
    showReset = () => {
        this.setState({ displayLogin: 'none', displayPassword: 'none', displayReset: 'flex' });
    }

    authenticateLogin = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        if (!email || !password) {
            this.setState({ msg: 'Preencha todos os campos para continuar.' })
        }
        else {
            try {
                const response = await api.post("/auth/authenticate", { email, password });
                this.setState({ border: '1px solid green', msg: '' })
                console.log(response);
                login(response.data.token);
                this.props.history.push("/painel");
            }
            catch (error) {
                this.setState({ border: '1px solid red', msg: 'Usuário inexistente.' })
                console.error(error);
            }
        }
    }
    recuperSenha = async event => {
        event.preventDefault();
        const { email } = this.state;
        if (!email) {
            this.setState({ msg: 'Preencha todos os campos para continuar.' })
        }
        else {
            try {
                const response = await api.post("auth/forgot_password", { email })
                this.setState({
                    border: '1px solid green', displayLogin: 'flex', displayPassword: 'none', msg: 'Verifique sua caixa de email e altere a senha com o token recebido',
                    email: ''
                })
                console.log(response);
            }
            catch (error) {
                this.setState({ border: '1px solid red', msg: 'Email não registrado.' })
                console.error(error);
            }
        }
    }
    resetarSenha = async event => {
        event.preventDefault();
        const { email, password, token } = this.state;
        if (!email || !password ||!token) {
            this.setState({ msg: 'Preencha todos os campos para continuar.' })
        }
        else {
            try {
                const response = await api.post("/auth/reset_password", { email, password, token });
                this.setState({ border: '1px solid green', msg: '' })
                console.log(response);
                login(response.data.token);
                this.props.history.push("/painel");
            }
            catch (error) {
                this.setState({ border: '1px solid red', msg: 'Usuário inexistente.' })
                console.error(error);
            }
        }
    }

    render() {
        return (
            <div className='containerLogin'>
                <div className='Login fadeLeft' style={{ display: this.state.displayLogin }}>
                    <img src={logo} className='logoLogin' alt='logo' />
                    <div style={{ color: 'red', fontSize: '15pt', textAlign: 'center', borderBottom: '1px solid gray' }}>{this.state.msg}</div>
                    <input type="name" name="email" placeholder="email" style={{ border: this.state.border }} value={this.state.email}
                        onChange={this.handleChangeEmail} required />
                    <input type="password" name="password" style={{ border: this.state.border }} placeholder="password"
                        onChange={this.handleChangePassword} required value={this.state.senha} />
                    <div className='Buttons'>
                        <button onClick={this.authenticateLogin} className='Acessar' type='submit'>Acessar</button>
                        <button onClick={this.showPassword} className='Cadastrar' type='submit'>Esqueci a senha</button>
                    </div>
                </div>
                <div className='Login fadeLeft' style={{ display: this.state.displayPassword }}>
                    <img src={logo} className='logoLogin' alt='logo' />
                    <div style={{ color: 'red', fontSize: '14pt', textAlign: 'center', borderBottom: '1px solid gray' }}>{this.state.msg}</div>
                    <input type="name" name="email" placeholder="email" style={{ border: this.state.border }} value={this.state.email}
                        onChange={this.handleChangeEmail} required />
                    <div className='Buttons'>
                        <button onClick={this.recuperSenha} className='Cadastrar' type='submit'>Recuperar </button>
                        <button onClick={this.showLogin} className='Cadastrar' type='submit'>Voltar</button>
                    </div>
                    <p style={{borderBottom: '1px solid white', textAlign: 'center', color:'white', marginTop: '10px'}} onClick={this.showReset}>Já possuo o token de recuperação</p>
                </div>
                <div className='Login fadeLeft' style={{ display: this.state.displayReset }}>
                    <img src={logo} className='logoLogin' alt='logo' />
                    <div style={{ color: 'red', fontSize: '14pt', textAlign: 'center', borderBottom: '1px solid gray' }}>{this.state.msg}</div>
                    <input type="name" name="email" placeholder="email" style={{ border: this.state.border }} value={this.state.email}
                        onChange={this.handleChangeEmail} required />
                    <input type="password" name="password" style={{ border: this.state.border }} placeholder="password"
                        onChange={this.handleChangePassword} required value={this.state.senha} />
                    <input type="token" name="token" style={{ border: this.state.border }} placeholder="token"
                        onChange={this.handleChangeToken} required value={this.state.token} />
                    <div className='Buttons'>
                        <button onClick={this.resetarSenha} className='Cadastrar' type='submit'>Entrar </button>
                        <button onClick={this.showLogin} className='Cadastrar' type='submit'>Voltar</button>
                    </div>
                </div>
            </div>

        )
    }
}