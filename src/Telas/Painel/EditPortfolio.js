import React, {Component} from 'react';
import api from '../../Services/api';
import { faTimes, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './EditPortfolio.css';

export default class EditPortfolio extends Component {
    constructor (props){
        super(props);
        this.state = {
            ports: [],
            id: '',
            isVIsible: false,
            isEdit: false,
            name: '',
            description: '',
            image1: null,
            image2: null,
            changeImg1: null,
            changeImg2: null,
            srcImg1: null,
            srcImg2: null,
            changeSrc1: false,
            changeSrc2: false
        }
    }
    async componentDidMount() {
        const response = await api.get(`/portfolio/`)
        console.log(response.data.portfolio);
        this.setState({
            ports: response.data.portfolio,
        })
    }
    async excluirPortfolio(id) {
        this.setState({ isVisible: false })
        if (window.confirm("tem certeza que deseja ecluir?")) {
            await api.delete(`/portfolio/${id}`);
            window.location.reload();
        }
        console.log(this.state.ports)
    }

    async editarPort() {
        const form = new FormData();
        form.append("name", this.state.name);
        form.append("description", this.state.description);
        if (this.state.image1) form.append("photos", this.state.image1);
        if (this.state.image2) form.append("photos", this.state.image2);
        try {
            console.log(this.state.name);
            await api.put(`/portfolio/${this.state.id}`, form, { headers: { 'content-type': 'multipart/form-data' } })
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

    hidePort() {
        this.setState({ isVisible: false })
    }

    handleChangeImage1= e => {
        e.preventDefault();

        let reader = new FileReader();
        let image1 = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            image1: image1,
            changeImg1: image1,
            src: reader.result,
            changeSrc1: true
          });
        }
        reader.readAsDataURL(image1)
    }

    handleChangeImage2= e => {
        e.preventDefault();

        let reader = new FileReader();
        let image2 = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            image2: image2,
            changeImg2: image2,
            src: reader.result,
            changeSrc2: true
          });
        }
        reader.readAsDataURL(image2)
    }
    showPortfolio(port) {
        this.setState({ isVisible: true, id: port._id, name: port.name, description: port.description, changeImg1: port.photos[0], changeImg2: port.photos[1]})
        console.log(port)
    }
    render() {
        const {ports} = this.state;
        return (
            <div className='containerEditPort' style={{display: this.props.displayEditPort}}>
                {this.state.isVisible ?
                    <div className='portCompleto'>
                        <div className='modalPort'>
                            <FontAwesomeIcon icon={faTimes} align className="Cancel" onClick={() => { this.hidePort() }} />
                            <input type='text' value={this.state.name} onChange={e=>this.setState({name: e.target.value})} />
                            <div className='fotoPort'>
                            {this.state.changeImg1 ?
                                <img className='imagePort' src={this.state.changeSrc1 ? this.state.src: 'https://api-ejcomp-site.herokuapp.com/portfolio/' + this.state.changeImg1.filename}></img>
                                    : <p>sem foto</p>}
                            </div>
                            <input type='file' onChange={this.handleChangeImage1} placeholder='Adicionar Imagem' className='containerButtons' />
                            <div className='fotoPort'>
                            {this.state.changeImg2 ?
                                <img className='imagePort' src={this.state.changeSrc2 ? this.state.src: 'https://api-ejcomp-site.herokuapp.com/portfolio/' + this.state.changeImg2.filename}></img>
                                    : <p>sem foto</p>}
                            </div>
                            <input type='file' onChange={this.handleChangeImage1} placeholder='Adicionar Imagem' className='containerButtons' />
                            <input type='text' value={this.state.description} onChange={e=>this.setState({description: e.target.value})} />
                            <div className='buttonsEdit'>
                                <button onClick={() => this.editarPort()}>Editar portfolio</button>
                            </div>
                        </div>
                    </div> : null}
                <table>
                    <tr className='listPortfolio'>
                        <th>Nome Portfolio</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                    {ports.length > 0 ? 
                        ports.map (port => (
                            <tr key={port.id} className='listPortfolio'>
                                <td> {port.name} </td>
                                <td onClick={() => this.showPortfolio(port)}>
                                    <FontAwesomeIcon icon={faEdit}/>
                                </td>
                                <td onClick={() => this.excluirPortfolio(port._id)}>
                                    <FontAwesomeIcon color='red' icon={faTrashAlt}/>
                                </td>
                            </tr>
                        ))
                        :
                        <h3>Não há nenhum cadastro de portfolio</h3>
                        }
                         </table>
                        </div>
        )
    }
}
