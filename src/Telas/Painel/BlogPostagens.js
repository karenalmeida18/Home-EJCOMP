import React, {Component} from 'react';
import Usuario from './Usuario';
import './BlogPainel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
export default class BlogPainel extends React.Component {
    render() {
        return (
            <div>
            <Usuario/>

            <div className='blogPainel' >
                <div className='headerBlog'>
                    <h3>Blog</h3>
                    <h5>Postagens</h5>
                    <FontAwesomeIcon icon={faAngleRight}  color='gray' id="setaBlog" />
                </div>
                <div className='containerBlogPainel'>
                    <div className='sectionBlogImagem'>
                        <p style={{marginBottom: '15px'}}>Imagem</p>
                        <div className='fotoPost'></div>
                        <button className='containerButtons'>Adicionar Imagem</button>
                        <button className='containerButtons'>Excluir Imagem</button>
                    </div>
                    <div>
                    <div className='sectionBlogText'>
                        <p>Título da Postagem</p>
                        <input type='excluir' placeholder='Excluir' />
                        <input type='adicionar' placeholder='Adicionar' />
                    </div>
                    <div className='sectionBlogText'>
                        <p>Descrição da Postagem</p>
                        <input type='excluir' placeholder='Excluir' />
                        <input type='adicionar' placeholder='Adicionar' />
                        <button className='concluir'>concluir</button>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}