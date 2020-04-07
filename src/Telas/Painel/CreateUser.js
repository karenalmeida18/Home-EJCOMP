import React from 'react';
import api from '../../Services/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './CreateUser.css'


export default class CreateUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordConfirm: '',
        }
    }
    handleChangeEmail = event => {
        this.setState({ email: event.target.value });
    }

    handleChangePassword = event => {
        this.setState({ password: event.target.value });
    }
    handleChangePasswordConfirm= event => {
        this.setState({ passwordConfirm: event.target.value });
    }

    handleSubmit = async event => {
        event.preventDefault();
        this.setState({ border: '1px solid white' })
        const { email, password, passwordConfirm } = this.state;
        if (!email || !password || !passwordConfirm) {
            alert('Preencha todos os campos para continuar.')
        }
        else if(password !== passwordConfirm) {alert('Digite a mesma senha nos dois campos.')}
        else {
            try{
                await api.post(`/auth/register`, { email, password } )
                .then(response=>{
                    console.log(response);
                    alert('Usuário cadastrado com sucesso.')
                    this.setState({ email: '', password: '', passwordConfirm: '' })
                    window.location.reload();
                })
                
            }catch(error){
                console.log(error);
                alert('Usuário já existente.')
            }
        }
    }
    render() {
        return (
            <div className='containerCreateUser' style={{ display: this.props.displayCreateUser }} >
                <div className='headerBlog'>
                    <h3>Usuários</h3>
                    <h5>Criar Usuário</h5>
                    <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: '5%' }} color='gray' id="setaBlog" />
                </div>
                <div className='containerUsers'>
                    <p>Cadastrar novo administrador</p>
                    <input placeholder="email" value={this.state.email}
                        onChange={this.handleChangeEmail} required />
                    <input placeholder="senha" type='password'
                        onChange={this.handleChangePassword} required value={this.state.password} />
                    <input placeholder="confirmar senha" type='password'
                        onChange={this.handleChangePasswordConfirm} required value={this.state.passwordConfirm} />
                    <button onClick={this.handleSubmit} className='Cadastrar' type='submit'>Cadastrar</button>
                </div>
            </div>

        )
    }

}

