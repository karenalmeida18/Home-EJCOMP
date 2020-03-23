import React from 'react'
import "./Blog.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'

export default function Card ({imagem, titulo, data,descricao, link}){
    return (
      <>
      <div className="cardPost">
        <img src={imagem} className="imagemPost" alt='imagePost'/>
        <div className="containerPost">
            <h2>{titulo}</h2>
             <p className='dataPost'>{data}</p>
             <p className='descricaoPost'>{descricao}</p>
             <a className='btnPost' href={link}>Veja mais
             <FontAwesomeIcon icon={faAngleDoubleRight}  color='black' size='xs' style={{marginLeft: '2px'}} />
             </a>
        </div>
      </div>
      </>
    );
}
