import React ,{Component} from 'react';
import './PortfolioPainel.css';

export default class PortfolioPainel extends Component {
    render () {
        return (
                <div className='portPage' style={{display: this.props.displayPort}}>
                    <div className='headerPort'><p>Portfolio</p></div>
                    <div className='containerPort'>
                        <div>
                            <div className='sectionPortImg'>
                                <p>Imagem</p>  
                                <div className='fotoPort1'></div>
                                <button className='containerButtons'>Adicionar Imagem</button>
                                <button className='containerButtons'>Excluir Imagem</button>
                            </div>
                            <div className='sectionPortImg'>
                                <p>Imagem</p>  
                                <div className='fotoPort2'></div>
                                <button className='containerButtons'>Adicionar Imagem</button>
                                <button className='containerButtons'>Excluir Imagem</button>
                            </div>
                        </div>
                        <div className='textsPort'>
                            <div className='sectionPortTextNome'>
                                <p>Nome</p>
                                <input type='excluir' placeholder='Excluir' />
                                <input type='adicionar' placeholder='Adicionar' />
                            </div>
                            <div className='sectionPortTextDesc'>
                                <p>Descrição</p>
                                <input type='excluir' placeholder='Excluir' />
                                <input type='adicionar1' placeholder='Adicionar' />
                                <button className='concluir'>concluir</button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

