import React from 'react';
import './Blog.css';
const Posts = (props) => {
    return(
        <li>
            <a href={props.link}>
                <div className='titleB'>
                    {props.titulo}
                </div>
            </a>
        </li>
    )
}

export default Posts;