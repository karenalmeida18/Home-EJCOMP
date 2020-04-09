import React from 'react';
import './Usuario.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUserCircle, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import EquipePainel from './EquipePainel'
import BlogPostagens from './BlogPostagens'
import PortfolioPainel from './PortfolioPainel'
import EditPortfolio from './EditPortfolio'
import EditPostagens from './EditPostagens'
import DeleteUser from './DeleteUser'
import CreateUser from './CreateUser'
import EditMembro from './EditMembro'
import { logout } from "../../Services/auth";


export default class Usuario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            displayOpEquipe: 'none',
            displayOpBlog: 'none',
            displayEquipe: 'none',
            displayBlog: 'none',
            displayPort: 'none',
            displayEditBlog: 'none',
            displayOpUser:  'none',
            displayCreateUser: 'none',
            displayDeleteUser: 'none',
            displayEditMember: 'none',
            displayEditPort: 'none',
            displayOpPort: 'none'
        }
    }
    showInput = () => {
        this.setState({ isVisible: true })
    }
    showOpEquipe = () => {
        this.setState({ displayOpEquipe: 'block' })
    }
    showOpBlog = () => {
        this.setState({ displayOpBlog: 'block' })
    }
    showOpUser = () => {
        this.setState({ displayOpUser: 'block' })
    }
    showOpPort = () => {
        this.setState({displayOpPort: 'block'})
    }
    showEquipe = () => {
        this.setState({displayEquipe: 'block', displayBlog: 'none', displayPort: 'none',displayEditBlog: 'none', displayCreateUser: 'none', displayDeleteUser:'none', displayEditMember: 'none', displayEditPort:'none'})

    }
    showPostagens = ()=>{
        this.setState({displayBlog: 'block', displayEquipe: 'none', displayPort: 'none', displayEditBlog: 'none', displayCreateUser: 'none', displayDeleteUser:'none', displayEditMember: 'none', displayEditPort:'none'})

    }
    showEditPostagens = ()=>{
        this.setState({displayBlog: 'none', displayEquipe: 'none', displayPort: 'none', displayEditBlog: 'block', displayCreateUser: 'none', displayDeleteUser:'none', displayEditMember: 'none', displayEditPort:'none'})

    }
    showEditMembro = ()=>{
        this.setState({displayBlog: 'none', displayEquipe: 'none', displayPort: 'none', displayEditBlog: 'none', displayCreateUser: 'none', displayDeleteUser:'none', displayEditMember: 'block', displayEditPort:'none'})

    }
    showEditPortfolio = ()=>{
        this.setState({displayBlog: 'none', displayEquipe: 'none', displayPort: 'none', displayEditBlog: 'none', displayCreateUser: 'none', displayDeleteUser:'none', displayEditPort:'block', displayEditMember: 'none'})
    }
    showPortfolio = ()=>{
        this.setState({displayPort: 'block', displayEquipe: 'none', displayBlog: 'none', displayEditBlog: 'none', displayCreateUser: 'none', displayDeleteUser:'none', displayEditPort:'none', displayEditMember: 'none'})
    }
    createUsers = ()=>{
        this.setState({displayPort: 'none', displayEquipe: 'none', displayBlog: 'none', displayEditBlog: 'none', displayCreateUser: 'block', displayDeleteUser:'none', displayEditMember: 'none', displayEditPort:'none'})
    }
    deleteUsers = ()=>{
        this.setState({displayPort: 'none', displayEquipe: 'none', displayBlog: 'none', displayEditBlog: 'none', displayCreateUser: 'none', displayDeleteUser:'block', displayEditMember: 'none', displayEditPort:'none'})
    }
    logoutPainel = () =>{
        logout()
        this.props.history.push("/");
    }
    render() {
        return (
            <div className='Usuario' id='painel'>
            <EquipePainel displayEq={this.state.displayEquipe}/>
            <BlogPostagens displayBg={this.state.displayBlog}/>
            <PortfolioPainel displayPort={this.state.displayPort}/>
            <EditPostagens displayEditBlog={this.state.displayEditBlog}/>
            <EditMembro displayEditMembro={this.state.displayEditMember}/>
            <DeleteUser displayDeleteUser={this.state.displayDeleteUser}/>
            <CreateUser displayCreateUser={this.state.displayCreateUser}/>
            <EditPortfolio displayEditPort={this.state.displayEditPort}/>
                <div className='asideUser'>
                    <div className='headerUser'>
                        <div className='infoUser'>
                            <FontAwesomeIcon icon={faUserCircle} color='gray' size='lg' className='iconUser' />
                            <p>{this.props.nameUser}</p>
                              <button onClick={() => this.logoutPainel()} className='logOut'>sair</button>
                        </div>
                        <FontAwesomeIcon icon={faBars} color='gray' onClick={this.showInput} />

                    </div>
                    {this.state.isVisible ?
                        <div className='checkPainel'>
                            <div className='opcoes'>
                                <input type="radio" name='opcao' value='op1' onClick={this.showOpEquipe} /> <label>Equipe</label>
                                <FontAwesomeIcon icon={faAngleRight} color='gray' style={{ marginLeft: '5px' }} />
                                <div style={{ display: this.state.displayOpEquipe }} className='showOpcao'>
                                    <input type="radio" name='opcao' value='op4' onClick={this.showEquipe} />
                                     <label>Membro</label>
                                    <FontAwesomeIcon icon={faAngleRight} color='gray' style={{ marginLeft: '5px ' }} />
                                </div>
                            </div>
                            <div style={{ display: this.state.displayOpEquipe }} className='showOpcao'>
                                <input type="radio" name='opcao' value='op5' onClick={this.showEditMembro}/>
                                <label>Editar Membros</label>
                                <FontAwesomeIcon icon={faAngleRight} color='gray' style={{ marginLeft: '5px' }} />
                            </div>
                            <div className='opcoes'>
                                <input type="radio" name='opcao' valu='op6' onClick={this.showOpPort}/> <label>Portfolio</label>
                                <FontAwesomeIcon icon={faAngleRight} color='gray' style={{ marginLeft: '5px' }} />
                                <div style={{display: this.state.displayOpPort}} className='showOpcao'>
                                    <input type="radio" name='opcao' value='op2' onClick={this.showPortfolio}/> <label>Criar Portfolio</label>
                                    <FontAwesomeIcon icon={faAngleRight} color='gray' style={{ marginLeft: '5px' }} />
                                </div>
                            <div style={{display: this.state.displayOpPort}} className='showOpcao'>
                                <input type="radio" name='opcao' value='op2' onClick={this.showEditPortfolio}/> <label>Editar Portfolio</label>
                                <FontAwesomeIcon icon={faAngleRight} color='gray' style={{ marginLeft: '5px' }} />
                            </div>
                            </div>
                            <div className='opcoes'>
                                <input type="radio" name='opcao' value='op3' onClick={this.showOpBlog} /> <label>Blog</label>
                                <FontAwesomeIcon icon={faAngleRight} color='gray' style={{ marginLeft: '5px' }} />
                            </div>
                            <div style={{ display: this.state.displayOpBlog }} className='showOpcao'>
                                 <input type="radio" name='opcao' value='op5' onClick={this.showPostagens}/>
                                <label>Postagens</label>
                                <FontAwesomeIcon icon={faAngleRight} color='gray' style={{ marginLeft: '5px' }} />
                            </div>
                            <div style={{ display: this.state.displayOpBlog }} className='showOpcao'>
                                 <input type="radio" name='opcao' value='op5' onClick={this.showEditPostagens}/>
                                <label>Editar Postagens</label>
                                <FontAwesomeIcon icon={faAngleRight} color='gray' style={{ marginLeft: '5px' }} />
                            </div>
                            <div className='opcoes'>
                                <input type="radio" name='opcao' value='op3' onClick={this.showOpUser} /> <label>Usuários</label>
                                <FontAwesomeIcon icon={faAngleRight} color='gray' style={{ marginLeft: '5px' }} />
                            </div>
                            <div style={{ display: this.state.displayOpUser }} className='showOpcao'>
                                 <input type="radio" name='opcao' value='op5' onClick={this.createUsers}/>
                                 <label>Cadastrar</label>
                                <FontAwesomeIcon icon={faAngleRight} color='gray' style={{ marginLeft: '5px' }} />
                            </div>
                            <div style={{ display: this.state.displayOpUser }} className='showOpcao'>
                                 <input type="radio" name='opcao' value='op5' onClick={this.deleteUsers}/>
                                 <label>Excluir</label>
                                <FontAwesomeIcon icon={faAngleRight} color='gray' style={{ marginLeft: '5px' }} />
                            </div>
                            </div>
                        :
                        null
                    }
                </div>
            </div>
        );
    }
}