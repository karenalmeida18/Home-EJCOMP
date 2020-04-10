import React from 'react';
import './EditPostagens.css'
import api from '../../Services/api'
import { faTimes, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
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
        this.setState({
            isVisible: true, title: post.title,
            description: post.description, image2: post.image, id: post._id
        })
    }
    hideArtigo() {
        this.setState({ isVisible: false, src: null })
        console.log(this.state.title)
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
                    /*modal para editar ou excluir postagem*/
                    <div className='postCompleto'>
                        <div className='modalPostagem'>
                            <FontAwesomeIcon icon={faTimes} color="black" className="Cancel" onClick={() => { this.hideArtigo() }} />
                            <input type='text' value={this.state.title} onChange={e => this.setState({ title: e.target.value })} />
                            <div className='fotoPostEdit'>
                                {this.state.image2 ?
                                    <img className='imagePostagem' alt='fotoblog' src={this.state.changeSrc ? this.state.src : 'https://api-ejcomp-site.herokuapp.com/projects/' + this.state.image2.filename} ></img>
                                    : <p>sem foto</p>}
                            </div>
                            <input type='file' onChange={this.handleChangeImage} placeholder='Adicionar Imagem' className='btnImage' />
                            <CKEditor
                                editor={ClassicEditor}
                                data={this.state.description}
                                onInit={editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log('Editor is ready to use!', editor);
                                }}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    this.setState({ description: data })
                                }}
                                onBlur={(event, editor) => {
                                    console.log('Blur.', editor);
                                }}
                                onFocus={(event, editor) => {
                                    console.log('Focus.', editor);
                                }}
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
                    <FontAwesomeIcon icon={faAngleRight} color='gray' id="setaBlog" />
                </div>
                <h3 style={{ marginTop: '5%', textAlign: 'center' }}>Selecione qual arquivo deseja alterar</h3>
                <div className='containerEditPostagens'>
                    {posts.length > 0 ?
                        posts.map(post => (
                            <div key={post._id} className='cardPostagens' onClick={() => this.showArtigo(post)}>
                                <h4 className='tituloEdit'>{post.title}</h4>
                                {post.image !== null ?
                                    < img className='imagePostagem' alt='fotoblog1' src={'https://api-ejcomp-site.herokuapp.com/projects/' + post.image.filename} />
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