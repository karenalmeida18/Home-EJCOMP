import React from 'react';
import './Usuario.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUserCircle, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import EquipePainel from './EquipePainel'
import BlogPostagens from './BlogPostagens'
import PortfolioPainel from './PortfolioPainel'
import EditPostagens from './EditPostagens'
import DeleteUser from './DeleteUser'
import CreateUser from './CreateUser'
import { HashLink as Link } from 'react-router-hash-link';

export default class Usuario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            displayOpEquipe: 'none',
            displayOpBlog: 'none',
            displayEquipe: 'none',
            displayBlog: 'none',
            displayEditBlog: 'none',
            displayPort: 'none',
            displayOpUser:  'none',
            displayCreateUser: 'none',
            displayDeleteUser: 'none',
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
    showEquipe = () => {
        this.setState({displayEquipe: 'block', displayBlog: 'none', displayPort: 'none',displayEditBlog: 'none', displayCreateUser: 'none', displayDeleteUser:'none' })
    }
    showPostagens = ()=>{
        this.setState({displayBlog: 'table', displayEquipe: 'none', displayPort: 'none', displayEditBlog: 'none', displayCreateUser: 'none', displayDeleteUser:'none'})
    }
    showEditPostagens = ()=>{
        this.setState({displayBlog: 'none', displayEquipe: 'none', displayPort: 'none', displayEditBlog: 'block', displayCreateUser: 'none', displayDeleteUser:'none' })
    }
    showPortfolio = ()=>{
        this.setState({displayPort: 'block', displayEquipe: 'none', displayBlog: 'none', displayEditBlog: 'none', displayCreateUser: 'none', displayDeleteUser:'none'})
    }
    createUsers = ()=>{
        this.setState({displayPort: 'none', displayEquipe: 'none', displayBlog: 'none', displayEditBlog: 'none', displayCreateUser: 'table', displayDeleteUser:'none'})
    }
    deleteUsers = ()=>{
        this.setState({displayPort: 'none', displayEquipe: 'none', displayBlog: 'none', displayEditBlog: 'none', displayCreateUser: 'none', displayDeleteUser:'block'})
    }
    render() {
        return (
            <div>
            <div className='Usuario' id='painel'>
            <EquipePainel displayEq={this.state.displayEquipe}/>
            <BlogPostagens displayBg={this.state.displayBlog}/>
            <PortfolioPainel displayPort={this.state.displayPort}/>
            <EditPostagens displayEditBlog={this.state.displayEditBlog}/>
            <DeleteUser displayDeleteUser={this.state.displayDeleteUser}/>
            <CreateUser displayCreateUser={this.state.displayCreateUser}/>
                <div className='asideUser'>
                    <div className='headerUser'>
                        <div className='infoUser'>
                            <FontAwesomeIcon icon={faUserCircle} color='gray' size='lg' className='iconUser' />
                            <p>{this.props.nameUser}</p>
                           <Link to={'/'}><button className='logOut'>sair</button></Link>
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
                            <div className='opcoes'>
                                <input type="radio" name='opcao' value='op2' onClick={this.showPortfolio}/> <label>Portfolio</label>
                                <FontAwesomeIcon icon={faAngleRight} color='gray' style={{ marginLeft: '5px' }} />
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
            </div>
        );
    }
}