import React from 'react'
import "./Blog.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'

export default function Card ({image, title, data,description, link,alt}){
    return (
      <>
      <div className="cardPost">
        <img src={image} className="imagemPost" alt={alt}/>
        <div className="containerPost">
            <h2>{title}</h2>
             <p className='dataPost'>{data}</p>
             <p className='descricaoPost'>{description}</p>
             <a className='btnPost' href={link}>Veja mais
             <FontAwesomeIcon icon={faAngleDoubleRight}  color='black' size='xs' style={{marginLeft: '2px'}} />
             </a>
        </div>
      </div>
      </>
    );
}
