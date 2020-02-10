import React from 'react';
import "./Blog.css";
import Aside from './Aside';
import PostCard from './PostCard';
import Navbar from '../Navbar/Navbar';
import MenuMobile from '../MenuMobile/MenuMobile';
import Footer from '../Footer/Footer';
export default class Blog extends React.Component {
    render() {
        return (
            <div className='Blog'>
                <Navbar backgroudColor='black' color='white' logo='Logo' className='itemMenu'></Navbar>
                <div id="menu"> <MenuMobile /> </div>
                <div className='containerBlog'>
                <PostCard/>
                <Aside/>
                </div>
                <Footer style={{borderTop: 'solid 4px #fafafa'}} color= 'white' backgroundColor='#1b1b1b' textColor= 'white' />
            </div>
        )
    }

}