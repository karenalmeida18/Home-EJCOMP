import React, { useState, useEffect } from 'react';
import "./Blog.css";
import Navbar from '../Navbar/Navbar';
import MenuMobile from '../MenuMobile/MenuMobile';
import Footer from '../Footer/Footer';
import { api, baseURL } from '../../Services/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faSpinner } from '@fortawesome/free-solid-svg-icons'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

export default function Blog() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [isVisible, setVisible] = useState(false);
    const [ultimaPostagem, setUltimaPostagem] = useState({});
    const [penultimaPostagem, setPenultimaPostagem] = useState({});
    const [loading, setLoading] = useState(true);
    const [displayPostagens, setDisplayPostagens] = useState('flex');
    const [displayTitle1, setDisplayTitle1] = useState('none');
    const [displayTitle2, setDisplayTitle2] = useState('none');
    const [postCompleto, setPostCompleto] = useState({});

    useEffect(() => {
        setLoading(true);
        async function loadPostagens() {
            const response = await api.get(`/projects/`);
            setLoading(false);
            const post = response.data.projects;
            setPosts(post.reverse());
            if (response.data.projects.length > 1) {
                setUltimaPostagem(post[0]);
                setPenultimaPostagem(post[1]);
                setDisplayTitle1('flex');
                setDisplayTitle2('flex');
            }
            else if (response.data.projects.length === 1) {
                setUltimaPostagem(response.data.projects[0]);
                setDisplayTitle1('flex');
                setDisplayTitle2('flex');
            }
        }

        loadPostagens();
    }, []);

    async function postagemCompleta(id) {
        const response = await api.get(`/projects/${id}`);
        setPostCompleto(response.data.project);
        setDisplayPostagens('none');
        setVisible(true);
    }

    function cardPostagens() {
        setVisible(false);
        setDisplayPostagens('flex');
    }

    function limitText(string) {
        if (string.length > 230) return string.substr(0, 230) + '...'
        else return string
    }
    
    const indexOfLastPost = page * 2;
    const indexOfFirstPost = indexOfLastPost - 2;
    const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);
    const count = Math.ceil(posts.length / 2);
    
    function handleChange(event, value) {
        setPage(value);
    };
    return (
        <div>
            <Navbar backgroundColor='white' color='#12264A' logo='logoNav' className='itemMenuMej' />
            <div className='Blog'>
                <div id="menu"> <MenuMobile /> </div>
                <div className='containerBlog'>
                    {isVisible ?
                        <div className='containerPostCompleto'>
                            <div className='headerTituloPost'>
                                <p className='titlePostC'>{postCompleto.title}</p>
                                <p style={{ color: '#12264A' }}>Publicado em {postCompleto.createdAt.substr(0, 10)}</p>
                            </div>
                            <div className='conteudoPostagem'>
                                <h2 style={{ marginTop: '5%', fontSize: '20pt' }}>{postCompleto.title}</h2>
                                <img className='imagePreview' alt='imagemBlog' src={baseURL + '/projects/' + postCompleto.image.filename} />
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: postCompleto.description }} />
                            <button onClick={() => cardPostagens()} className='btnVoltar'>voltar</button>
                        </div> : null
                    }
                    <div className='containerCardPost' style={{ display: displayPostagens }} >
                        {loading ? <FontAwesomeIcon icon={faSpinner} /> :
                            currentPost.length > 0 ?
                                currentPost.map(post => (
                                    <div className="cardPost">
                                        <Grid container spacing={2}>
                                            <Grid item>
                                                <div className='divImage'>
                                                    <img src={baseURL + '/projects/' + post.image.filename} alt='imagemBlogCard' className="imagemPost" />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} sm container>
                                                <Grid item xs container direction="column" spacing={2}>
                                                    <Grid item xs>
                                                        <Typography gutterBottom variant="subtitle1">
                                                            <h3 className='titlePosts'>{post.title}</h3>
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary">
                                                            <p className='dataPost'>{post.createdAt.substr(0, 10)}</p>
                                                        </Typography>
                                                        <Typography variant="body2" gutterBottom>
                                                            <div className='descricaoPost' dangerouslySetInnerHTML={{ __html: limitText(post.description) }} />
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                                            <p onClick={() => postagemCompleta(post._id)}>Veja mais
                                         <FontAwesomeIcon icon={faAngleDoubleRight} color='black' size='xs' style={{ marginLeft: '2px' }} />
                                                            </p>
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </div>
                                )) : <h3 className='textPost'>Ainda não contém nenhuma postagem</h3>
                        }
                        <Pagination count={count} defaultPage={1} page={page} onChange={handleChange} />
                    </div>
                    <div className='Aside'>
                        <div className='Postagens'>
                            <h3>ÚLTIMAS POSTAGENS</h3>
                            <div className='containerTitulosB'>
                                <p style={{ display: displayTitle1 }} className='titleB' onClick={() => postagemCompleta(ultimaPostagem._id)}>
                                    {ultimaPostagem.title} </p>
                                <p style={{ display: displayTitle2 }} className='titleB' onClick={() => postagemCompleta(penultimaPostagem._id)}>
                                    {penultimaPostagem.title} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer color='white' backgroundColor='#1b1b1b' textColor='white' />
        </div>
    )
}