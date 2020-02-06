import React from 'react'
import "./Blog.css";

export default function Card ({imagem, titulo, data,descricao, link}){
    return (
      <>
      <div className="cardPost">
        <img src={imagem} className="imagemPost"/>
        <div className="containerPost">
            <h2>{titulo}</h2>
             <p className='dataPost'>{data}</p>
             <p className='descricaoPost'>{descricao}</p>
             <a className='btnPost' href={link}>Veja mais</a>
        </div>
      </div>
      </>
    );
}
