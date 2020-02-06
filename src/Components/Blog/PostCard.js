import React from 'react'
import Card from './Card';
import teste from  '../../Imagem/membro1.jpeg'

const cardPost = [
    {
        imagem: teste,
        titulo: 'Desenvolvimento com React Native', 
        data: '06/02/2020',
        descricao: ' is simply dummy text of the printing and typesetting indusindun the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in th ',
        link: 'https://www.facebook.com'
    },
]

export default class Footer extends React.Component {
    render() {
        return (
            <div className='containerCardPost'>
                {
                    cardPost.map(post=>(
                        <Card
                        imagem={post.imagem}
                        titulo={post.titulo}
                        data={post.data}
                        descricao={post.descricao}
                        link={post.link}
                        />

                    ))
                }
                {
                    cardPost.map(post=>(
                        <Card
                        imagem={post.imagem}
                        titulo={post.titulo}
                        data={post.data}
                        descricao={post.descricao}
                        link={post.link}
                        />

                    ))
                }
            </div>
        )
    }

}