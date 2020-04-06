import React from 'react';
import "./Blog.css";
import Navbar from '../Navbar/Navbar';
import MenuMobile from '../MenuMobile/MenuMobile';
import Footer from '../Footer/Footer';
import api from '../../Services/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            pagina: '',
            limitePagine: false,
            msg: '',
            displayPostagens: 'flex',
            isVisible: false,
            ultimaPostagem: '',
            penultimaPostagem: '',
        }
    }
    postCompleto = (post) => {
        this.setState({
             displayPostagens: 'none', isVisible: true,
            title: post.title, image: post.image, description: post.description,
            data: post.createdAt
        })
    }
    listPosts = async (pagina) => {
        const response = await api.get(`/projects/`)
        const indice = response.data.projects.length - 1
        console.log(response.data.projects.length);
        this.setState({
            posts: response.data.projects,
            ultimaPostagem: response.data.projects[indice],
            penultimaPostagem: response.data.projects[indice - 1]
        })
        this.listItens(this.state.posts.reverse(), pagina, 2)
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
        if (this.state.pagina === totalPage) { this.setState({ limitePagine: true }) }
        else { this.setState({ limitePagine: false }) }
    }
    limitText = (string) => {
        if (string.length > 230) return string.substr(0, 230) + '...'
        else return string
    }
    componentDidMount() {
        this.listPosts(1)
    }
    render() {
        const { posts } = this.state;
        return (
            <div>
                <Navbar backgroundColor='white' color='#12264A' logo='logoNav' className='itemMenuMej' />    
                <div className='Blog'>
                    <div id="menu"> <MenuMobile /> </div>
                    <div className='containerBlog'>
                        {this.state.isVisible ?
                            <div className='containerPostCompleto'>
                                <div className='headerTituloPost'>
                                <p className='titlePostC'>{this.state.title}</p>
                                <p style={{color: '#12264A'}}>Publicado em {this.state.data.substr(0, 10)}</p>
                                </div>
                                <div className='conteudoPostagem'>
                                <h2 style={{marginTop: '5%', fontSize: '20pt'}}>{this.state.title}</h2>
                                <img className='imagePreview'  src={'https://api-ejcomp-site.herokuapp.com/projects/' + this.state.image.filename} />
                                </div>
                                <p>{this.state.description}</p>
                                <button onClick={() => { this.setState({ isVisible: false, displayPostagens: 'flex' }) }} className='btnVoltar'>voltar</button>
                            </div> : null
                        }
                        <div className='containerCardPost' style={{ display: this.state.displayPostagens }} >
                            {posts.length > 0 ?
                                posts.map(post => (
                                    <div className="cardPost">
                                        <img src={'https://api-ejcomp-site.herokuapp.com/projects/' + post.image.filename} className="imagemPost"/>
                                        <div className="containerPost">
                                            <h3 className='titlePosts'>{post.title}</h3>
                                            <p className='dataPost'>{post.createdAt.substr(0, 10)}</p>
                                            <p className='descricaoPost'>{this.limitText(post.description)}</p>
                                            <p onClick={() => this.postCompleto(post)} className='btnPost'>Veja mais
                                         <FontAwesomeIcon icon={faAngleDoubleRight} color='black' size='xs' style={{ marginLeft: '2px' }} />
                                            </p>
                                        </div>
                                    </div>
                                )) : <h3 className='textPost'>Ainda não contém nenhuma postagem</h3>
                            }
                            <div className='buttonsPagination'>
                                {this.state.pagina > 1 ?
                                    <button className='btnPagina' onClick={() => this.listPosts(this.state.pagina - 1)}>
                                     <FontAwesomeIcon className='btnIcon2' color='#12264A' icon={faArrowLeft} /> Anterior
                                    </button> : null}
                                <p className='numeroPagina'>{this.state.pagina}</p>
                                {!this.state.limitePagine ?
                                    <button className='btnPagina' onClick={() => this.listPosts(this.state.pagina + 1)}>Próximo
                                     <FontAwesomeIcon className='btnIcon' color='#12264A' icon={faArrowRight} />
                                    </button> : null}
                            </div>
                        </div>
                        <div className='Aside'>
                            <div className='Postagens'>
                                <h3>ÚLTIMAS POSTAGENS</h3>
                                <div className='containerTitulosB'>
                                    <p className='titleB' onClick={() => this.postCompleto(this.state.ultimaPostagem)}>
                                        {this.state.ultimaPostagem.title} </p>
                                    <p className='titleB' onClick={() => this.postCompleto(this.state.penultimaPostagem)}>
                                        {this.state.penultimaPostagem.title} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer color='white' backgroundColor='#1b1b1b' textColor='white' />
            </div>
        )
    }

}