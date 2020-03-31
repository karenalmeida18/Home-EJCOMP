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
            pagina: '',
            limitePagine: false,
            msg: '',
        }
    }
    listPosts = async (pagina) => {
        const response = await api.get(`/projects/`)
        console.log(response.data.projects);
        this.setState({
            posts: response.data.projects
        })
        this.listItens(this.state.posts, pagina, 2)
    }
    listItens = (items, pageAtual, limite) => {
        let result = [];
        let totalPage = Math.ceil(items.length / limite);
        let count = (pageAtual * limite) - limite;
        let delimiter = count + limite;
        if (pageAtual <= totalPage) {
            for (let i = count; i < delimiter; i++) {
                if (items[i] != null) {
                    result.push(items[i]);
                }
            } count++;
        }
        this.setState({ posts: result, pagina: pageAtual })
        if (this.state.posts.length === 0) { this.setState({ limitePagine: true }) }
        else { this.setState({ limitePagine: false }) }
    }
    componentDidMount() {
        this.listPosts(1)
    }

    render() {
        const { posts } = this.state;
        return (
            <div>
                <Navbar backgroundColor='#1b1b1b' color='white' logo='Logo' className='itemMenu'></Navbar>
                <div className='Blog'>
                    <div id="menu"> <MenuMobile /> </div>
                    <div className='containerBlog'>
                        <div className='containerCardPost'>
                            {posts.length > 0 ?
                                posts.map(post => (
                                    <Card key={post.id}
                                        title={post.title}
                                        image={post.image}
                                        description={post.description}
                                    />
                                )) : <h3 className='textPost'>Ainda não contém nenhuma postagem</h3>
                            }
                            <div className='buttonsPagination'>
                        {this.state.pagina > 1 ?
                            <button onClick={() => this.listPosts(this.state.pagina - 1)}> Pagina anterior </button> : null}
                        {!this.state.limitePagine ?
                            <button onClick={() => this.listPosts(this.state.pagina + 1)}>Próxima pagina </button> : null}
                    </div>
                        </div>
                        <Aside />
                    </div>
                    
                </div>
                <Footer style={{ borderTop: 'solid 4px #fafafa' }} color='white' backgroundColor='#1b1b1b' textColor='white' />
            </div>
        )
    }

}