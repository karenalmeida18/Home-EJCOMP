import React from 'react';
import './EditPostagens.css'
import api from '../../Services/api'
import EdiText from 'react-editext'
import { faTimes , faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default class EditPostagens extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            id: '',
            isVisible: false,
            isEdit: false,
            title: '',
            image: null,
            image2: null,
            description: '',
            changeSrc: false
        }
    }
    async componentDidMount() {
        const response = await api.get(`/projects/`)
        console.log(response.data.projects);
        this.setState({
            posts: response.data.projects,
        })
    }
    async excluirPost() {
        this.setState({ isVisible: false })
        if (window.confirm("tem certeza que deseja ecluir?")) {
            await api.delete(`/projects/${this.state.id}`)
            window.location.reload();
        }
        console.log(this.state.posts)
    }

    async editarPost() {
        const form = new FormData();
        form.append("title", this.state.title);
        form.append("description", this.state.description);
        if (this.state.image) form.append("image", this.state.image);
        try {
            await api.put(`/projects/${this.state.id}`, form, { headers: { 'content-type': 'multipart/form-data' } })
                .then(response => {
                    console.log(response.data)
                    alert('publicação editada com sucesso.');
                    window.location.reload();
                })

        } catch (error) {
            console.log(error);
            alert('erro ao editar publicação.')
        }

    }

    showArtigo(post) {
        this.setState({ isVisible: true, title: post.title, 
            description: post.description, image2: post.image, id: post._id })
            console.log(this.state.title)
            console.log(this.state.description)
            console.log(this.state.image)
            console.log(this.state.image2)
    }
    hideArtigo() {
        this.setState({ isVisible: false, src: null })
        console.log(this.state.title)
    }
    onSaveTitle = val => {
        console.log('Edited Value -> ', val)
        if (val !== null && val !== undefined) {
            this.setState({ title: val })
        }
        console.log(val)
    }
    onSaveDescription = val => {
        console.log('Edited Value -> ', val)
        if (val !== null && val !== undefined)
            this.setState({ description: val })
        console.log(val)
    }
    handleChangeImage = e => {
        e.preventDefault();

        let reader = new FileReader();
        let image = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                image: image,
                image2: image,
                src: reader.result,
                changeSrc: true,
            });
        }
        reader.readAsDataURL(image)
    }
    render() {
        const { posts } = this.state;
        return (
            <div className='EditPostagens' style={{ display: this.props.displayEditBlog }}>
                
                {this.state.isVisible ?
                    <div className='postCompleto'>
                        <div className='modalPostagem'>
                            <FontAwesomeIcon icon={faTimes} color="black" className="Cancel" onClick={() => { this.hideArtigo() }} />
                            <EdiText
                                type="text"
                                value={this.state.title}
                                onSave={this.onSaveTitle}
                            />
                            <div className='fotoPostEdit'>
                                {this.state.image2 ?
                                    <img className='imagePostagem' src={this.state.changeSrc ? this.state.src : 'https://api-ejcomp-site.herokuapp.com/projects/' + this.state.image2.filename} ></img>
                                    : <p>sem foto</p>}
                            </div>
                            <input type='file' onChange={this.handleChangeImage} placeholder='Adicionar Imagem' className='btnImage' />
                            <EdiText 
                                 type='textarea'
                                 inputProps={{
                                   className: 'textarea',
                                   placeholder: 'Type your content here',
                                   style: {
                                     outline: 'none',
                                     minWidth: 'auto',
                                   },
                                   rows: 10
                                 }}
                                value={this.state.description}
                                onSave={this.onSaveDescription}
                            />
                            <div className='buttonsEdit'>
                                <button onClick={() => this.excluirPost()}>excluir artigo</button>
                                <button onClick={() => this.editarPost()}> editar artigo</button>
                            </div>
                        </div>
                    </div> : null}
                    <div className='headerBlog'>
                    <h3>Blog</h3>
                    <h5>Editar Postagens</h5>
                    <FontAwesomeIcon icon={faAngleRight}  color='gray' id="setaBlog" />
                </div>
                <h3 style={{ marginTop: '5%' , textAlign: 'center'}}>Selecione qual arquivo deseja alterar</h3>
                <div className='containerEditPostagens'>
                    {posts.length > 0 ?
                        posts.map(post => (
                            <div key={post._id} className='cardPostagens' onClick={() => this.showArtigo(post)}>
                                <h4>{post.title}</h4>
                                {/*<h4>{post.description}</h4>*/}
                                {post.image !== null ?
                                    < img className='imagePostagem' src={'https://api-ejcomp-site.herokuapp.com/projects/' + post.image.filename} />
                                    : <p>post sem foto</p>
                                }
                            </div>
                        )) : <h3 className='textPost'>Ainda não contém nenhuma postagem</h3>
                    }
                </div>
            </div>
        )
    }
}