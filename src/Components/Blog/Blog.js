import React from 'react';
import "./Blog.css";
import Aside from './Aside';
import PostCard from './PostCard';
import Navbar from '../Navbar/Navbar';
import MenuMobile from '../MenuMobile/MenuMobile';

export default class Footer extends React.Component {
    render() {
        return (
            <div className='Blog'>
                <Navbar backgroudColor='black' color='white' logo='Logo' className='itemMenu'></Navbar>
                <div id="menu"> <MenuMobile /> </div>
                <div className='containerBlog'>
                <PostCard/>
                <Aside/>
                </div>
            </div>
        )
    }

}