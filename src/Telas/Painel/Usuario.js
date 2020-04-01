import React from 'react';
import './Usuario.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUserCircle, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import EquipePainel from './EquipePainel'
import BlogPostagens from './BlogPostagens'
import PortfolioPainel from './PortfolioPainel'
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
            displayPort: 'none',
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
    showEquipe = () => {
        this.setState({displayEquipe: 'block', displayBlog: 'none', displayPort: 'none'})
    }
    showPostagens = ()=>{
        this.setState({displayBlog: 'table', displayEquipe: 'none', displayPort: 'none'})
    }
    showPortfolio = ()=>{
        this.setState({displayPort: 'block', displayEquipe: 'none', displayBlog: 'none'})
    }
    render() {
        return (
            <div>
           
            <div className='Usuario' id='painel'>
            <EquipePainel displayEq={this.state.displayEquipe}/>
            <BlogPostagens displayBg={this.state.displayBlog}/>
            <PortfolioPainel displayPort={this.state.displayPort}/>
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