import React from 'react';
import './Equipe.css';

export default function Membro({ fotoMembro, textNome, textCargo }) {

    return (
        <div className='CardMembros'>
            <img src={fotoMembro} className='FotoMembro'></img>
            <div className="InfoMembros" >
                <h2 className='NomeMembros'><strong>{textNome}</strong></h2>
                <p>{textCargo}</p>
            </div>
        </div>
    )



}