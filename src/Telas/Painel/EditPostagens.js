import React from 'react';
import './EditPostagens.css'
import api from '../../Services/api'
import EdiText from 'react-editext'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
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
            description: ''

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
        form.append("image", this.state.image);
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
        this.setState({ isVisible: true, title: post.title, description: post.description, image: post.image, id: post._id })
        console.log(post)
        console.log(post.title)
        console.log(post.image)
        console.log(this.state.image)
        console.log(this.state.title)
    }
    hideArtigo() {
        this.setState({ isVisible: false })
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
                src: reader.result
            });
        }
        reader.readAsDataURL(image)
    }
    renderSrc = (str) => {
        let n = 7;
        str = str.substring(n);
        console.log('https://api-ejcomp-site.herokuapp.com'+str);
        this.setState({image: 'https://api-ejcomp-site.herokuapp.com'+str})
        return'https://api-ejcomp-site.herokuapp.com'+str

    }

    render() {
        const { posts } = this.state;
        return (
            <div className='EditPostagens' style={{ display: this.props.displayEditBlog }}>
                {this.state.isVisible ?
                    <div className='postCompleto'>
                        <div className='modalPostagem'>
                            <FontAwesomeIcon icon={faTimes} color="black" className="Cancel" onClick={() => { this.setState({ isVisible: false }) }} />
                            <EdiText
                                type="text"
                                value={this.state.title}
                                onSave={this.onSaveTitle}
                            />
                            <div className='fotoPost'>
                                <img src={this.state.image} ></img>
                                <img className='imagePreview' src={this.state.src} alt='imagePost' />
                            </div>
                            <input type='file' onChange={this.handleChangeImage} placeholder='Adicionar Imagem' className='containerButtons' />
                            <EdiText
                                type="text"
                                value={this.state.description}
                                onSave={this.onSaveDescription}
                            />
                            <div className='buttonsEdit'>
                                <button onClick={() => this.excluirPost()}>excluir artigo</button>
                                <button onClick={() => this.editarPost()}> editar artigo</button>
                            </div>
                        </div>
                    </div> : null}
                <h3 style={{ marginTop: '5%' }}>Selecione qual arquivo deseja alterar</h3>
                <div className='containerEditPostagens'>
                    {posts.length > 0 ?
                        posts.map(post => (
                            <div key={post.id} className='cardPostagens' onClick={() => this.showArtigo(post)}>
                                <h4>{post.title}</h4>
                                {/*<h4>{post.description}</h4>*/}
                                <img src={()=> this.renderSrc(post.image.path)} />
                                
                            </div>
                        )) : <h3 className='textPost'>Ainda não contém nenhuma postagem</h3>
                    }
                </div>
            </div>
        )
    }
}