import React, {Component} from 'react';
import Posts from './Postagens';
import './Blog.css';


const test1 = [
    {
    titulo: 'dsadsadsad',
    link: 'https://www.youtube.com'
    },
    {
    titulo: 'dsadasdsad312321',
    link: 'https://www.facebook.com'
    },
]

const test2 = [
    {
        titulo: '31312321321',
        link: 'https://www.youtube.com'
        },
        {
        titulo: 'asdsadsadsad111',
        link: 'https://www.facebook.com'
        },
]

export default function Aside (){
        return (
            <>
            <div className='Aside'>
                <div className='Postagens'>
                    <h2>ÚLTIMAS POSTAGENS</h2>
                    <ul>  
                    {
                        
                        test1.map(tile =>(
                            <Posts
                            titulo={tile.titulo}
                            link={tile.link}
                            />                      
                        ))
        
                    }
                    </ul>
                    <hr className='hr1-aside'/>
                    <h2>TOP DICAS</h2>
                    <ul>  
                    {
                        
                        test2.map(tile =>(
                            <Posts
                            titulo={tile.titulo}
                            link={tile.link}
                            />                      
                        ))
        
                    }
                    </ul>
                    
                </div>
            </div>
            </>
        )
}