import React from 'react'
import './EquipePainel.css'
export default class EquipePainel extends React.Component {
    render() {
        return (
            <div className='EquipePainel' style={{display: this.props.displayEq}} >
                <div className='headerEquipe'><p>Membro</p></div>
                <div className='containerEquipePainel'>
                    <div className='sectionMembroImagem'>
                        <p>Imagem</p>
                        <div className='fotoAdmMembro'></div>
                        <button className='containerButtons'>Adicionar Imagem</button>
                        <button className='containerButtons'>Excluir Imagem</button>
                    </div>
                    <div>
                    <div className='sectionMembroText'>
                        <p>Nome</p>
                        <input type='adicionar' placeholder='Excluir' />
                        <input type='excluir' placeholder='Adicionar' />
                    </div>
                    <div className='sectionMembroText'>
                        <p>Cargo</p>
                        <input type='adicionar' placeholder='Excluir' />
                        <input type='excluir' placeholder='Adicionar' />
                        <button className='concluir'>concluir</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}