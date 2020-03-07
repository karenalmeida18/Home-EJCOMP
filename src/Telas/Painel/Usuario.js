import React from 'react';
import './Usuario.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUserCircle, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { HashLink as Link } from 'react-router-hash-link';


export default class Usuario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            displayEquipe: 'none',
            displayBlog: 'none',
        }
    }
     showInput =()=>{
         this.setState({isVisible: true})
     }
     showEquipe =()=>{
         this.setState({displayEquipe: 'block'})
     }
     showBlog =()=>{
         this.setState({displayBlog: 'block'})
     }
     
    render() {
        return (
            <div className='Usuario' id='painel'>
                <div className='asideUser'>
                    <div className='headerUser'>
                        <div className='infoUser'>
                            <FontAwesomeIcon icon={faUserCircle} color='gray' size='lg' className='iconUser'/>
                            <p>Fulano</p>
                        </div>
                        <FontAwesomeIcon icon={faBars} color='gray' onClick={this.showInput} />

                    </div>
                    {this.state.isVisible ?
                        <div className='checkPainel'>
                            <div className='opcoes'>
                            <input type="radio" name='opcao' value='op1' onClick={this.showEquipe}/> <label>Equipe</label>
                            <FontAwesomeIcon icon={faAngleRight}  color='gray'  style={{marginLeft: '5px'}} />
                             <div style={{display:this.state.displayEquipe}} className='showOpcao'> <input type="radio" name='opcao' value='op4' />
                              <label>Membro</label>
                              <FontAwesomeIcon icon={faAngleRight}  color='gray'  style={{marginLeft: '5px '}} />
                              </div>
                            </div> 
                            <div className='opcoes'>
                            <input type="radio" name='opcao' value='op2'/> <label>Portfolio</label>
                            <FontAwesomeIcon icon={faAngleRight}  color='gray'  style={{marginLeft: '5px'}} />
                            </div>
                            <div className='opcoes'>
                            <input type="radio" name='opcao' value='op3' onClick={this.showBlog}/> <label>Blog</label>
                            <FontAwesomeIcon icon={faAngleRight}  color='gray'  style={{marginLeft: '5px'}} />
                            </div>
                            <div style={{display:this.state.displayBlog}} className='showOpcao'> <input type="radio" name='opcao' value='op5' />
                              <label>Postagens</label>
                              <FontAwesomeIcon icon={faAngleRight}  color='gray'  style={{marginLeft: '5px'}} />

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