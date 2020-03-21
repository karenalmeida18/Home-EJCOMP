import React from 'react'
import Card from './Card';
import teste from  '../../Imagem/membro1.jpeg'

const cardPost = [
    {
        image: teste,
        title: 'Desenvolvimento com React Native', 
        description: ' is simply dummy text of the printing and typesetting indusindun the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in th ',
    },
]

export default class Footer extends React.Component {
    render() {
        return (
            <div className='containerCardPost'>
                {
                    cardPost.map(post=>(
                        <Card
                        image={post.image}
                        title={post.title}
                        description={post.description}
                        />

                    ))
                }
            </div>
        )
    }

}