import React from 'react';
import "./Blog.css";
import Aside from './Aside';
import Navbar from '../Navbar/Navbar';
import MenuMobile from '../MenuMobile/MenuMobile';
import Footer from '../Footer/Footer';
import api from '../../Services/api'
import Card from './Card';

export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }

    listPosts = async e => {
        const { posts } = this.state;
        const response = await api.get(`/projects/`)
        console.log(response.data);
        const data = {
            title: response.data.title,
            description: response.data.description,
            image: response.data.image,
        }
        this.setState({
            posts: [...posts, data]
        })

    }
    componentDidMount() {
        this.listPosts()
    }
    render() {
        const { posts } = this.state;
        return (
            <div>
                <div className='Blog'>
                    <Navbar backgroudColor='black' color='white' logo='Logo' className='itemMenu'></Navbar>
                    <div id="menu"> <MenuMobile /> </div>
                    <div className='containerBlog'>
                        <div className='containerCardPost'>
                            {posts.length > 0 ? 
                            posts.map(post =>(
                                   <Card key={post.id}
                                   title={post.title}
                                   image={post.image}
                                   description={post.description}
                                   />
                            )) : <h3 className='textPost'>Ainda não contém nenhuma postagem</h3>
                        }
                        </div>
                        <Aside />
                    </div>
                </div>
                <Footer style={{ borderTop: 'solid 4px #fafafa' }} color='white' backgroundColor='#1b1b1b' textColor='white' />
            </div>
        )
    }

}