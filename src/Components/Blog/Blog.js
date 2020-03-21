import React from 'react';
import "./Blog.css";
import Aside from './Aside';
import PostCard from './PostCard';
import Navbar from '../Navbar/Navbar';
import MenuMobile from '../MenuMobile/MenuMobile';
import Footer from '../Footer/Footer';
import axios from 'axios'
import api from '../../Services/api'
import Card from './Card';

export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [], 
            limite: false,
            image: '',
            title: '',
            description: '',
        }
    }
      
    componentDidMount () {
        api.get('/projects')
            .then(response => {
                this.setState({posts: response.data});
            });

    }


    
    render() {
        const postagens = this.state.posts.map(post=> {
            return (<Card
                    titile={post.titile}
                      /> );
        });
        return (
            <div>
                <div className='Blog'>
                    <Navbar backgroudColor='black' color='white' logo='Logo' className='itemMenu'></Navbar>
                    <div id="menu"> <MenuMobile /> </div>
                    <div className='containerBlog'>
                    <div className='containerCardPost'>
                    {postagens}
                        </div>
                        <Aside />
                    </div>
                </div>
                <Footer style={{ borderTop: 'solid 4px #fafafa' }} color='white' backgroundColor='#1b1b1b' textColor='white' />
            </div>
        )
    }

}