import React from 'react';
import "./Blog.css";
import Navbar from '../Navbar/Navbar';
import MenuMobile from '../MenuMobile/MenuMobile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

export default class Footer extends React.Component {
    render() {
        return (
            <div className='Blog'>
                <Navbar backgroudColor='black' color='white' logo='logoAzul' className='itemMenu'></Navbar>
                <div id="menu"> <MenuMobile /> </div>
                <div className='ContainerBlog'>
                    <FontAwesomeIcon icon={faChalkboardTeacher} size='20x' color='white' borderRadius='30px' className='IconBlog'></FontAwesomeIcon>
                    <h1 className='TextBlog' > BLOG EM CONSTRUÇÃO</h1>
                </div>
            </div>
        )
    }

}