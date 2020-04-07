import React from 'react';
import './BlogPainel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import api from '../../Services/api'
export default class BlogPainel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description:"",
            image: null,
            src: '',
        }
    }
    handleChangeTitulo= event => {
        this.setState({ title: event.target.value });
    }
    handleChangeDescription= event => {
        this.setState({ description: event.target.value });
    }
    handleChangeImage= e => {
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
        
    createPost = async event => {
        event.preventDefault();
       
        let form = new FormData();
        form.append("title",this.state.title);
        form.append("description",this.state.description);
        form.append("image",this.state.image)
        try{
            await api.post("/projects",form, {headers:{'Content-Type': 'multipart/form-data'}} )
            .then(response=>{
                console.log(response.data)
                this.setState({title:'',description:'',image:null, src: ''});
                alert('publicação criado com sucesso.');
                window.location.reload();
            })
            
        }catch(error){
            console.log(error);
            alert('erro ao criar publicação.')
        }

    }
    render() {
        return (
            <div className='blogPainel' style={{display: this.props.displayBg}}>
                <div className='headerBlog'>
                    <h3>Blog</h3>
                    <h5>Postagens</h5>
                    <FontAwesomeIcon icon={faAngleRight}  color='gray' id="setaBlog" />
                </div>
                <div className='containerBlogPainel'>
                    <div className='sectionBlogImagem'>
                        <p style={{marginBottom: '15px'}}>Imagem</p>
                        <div className='fotoPost'>
                             <img className='imagePreview' src={this.state.src} alt='imagePost'/>
                        </div>
                        <input type='file' onChange={this.handleChangeImage} placeholder='Adicionar Imagem' className='containerButtons'/>
                    </div>
                    <div>
                    <div className='sectionBlogText'>
                        <p>Título da Postagem</p>
                        <input type='adicionar ' placeholder='Adicionar' value={this.state.title} onChange={this.handleChangeTitulo}/>
                    </div>
                    <div className='sectionBlogText'>
                        <p>Descrição da Postagem</p>
                        <textarea rows='10' type='adicionar' placeholder='Adicionar' value={this.state.description} onChange={this.handleChangeDescription} />
                        <button type='submit' onClick={this.createPost} className='concluir'>concluir</button>
                    </div>
                    </div>
                </div>
            </div>
            
        )
    }
}