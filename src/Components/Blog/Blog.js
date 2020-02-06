import React from 'react';
import "./Blog.css";
import Aside from './Aside';
import Navbar from '../Navbar/Navbar';
import MenuMobile from '../MenuMobile/MenuMobile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

export default class Footer extends React.Component {
    render() {
        return (
            <div className='Blog'>
                <Navbar backgroudColor='black' color='white' logo='Logo' className='itemMenu'></Navbar>
                <div id="menu"> <MenuMobile /> </div>
                <Aside/>
            </div>
        )
    }

}