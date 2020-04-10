import React from 'react';
import './EditMembro.css'
import api from '../../Services/api'
import { faTimes , faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default class EditMembro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [],
            id: '',
            isVisible: false,
            isEdit: false,
            name: '',
            avatar: null,
            avatar2: null,
            occupation: '',
            changeSrc: false
        }
    }
    async componentDidMount() {
        const response = await api.get(`/members/`)
        console.log(response.data.members);
        this.setState({
            members: response.data.members,
        })
    }
    async excluirMembro() {
        this.setState({ isVisible: false })
        if (window.confirm("Tem certeza que deseja excluir o membro?")) {
            await api.delete(`/members/${this.state.id}`)
            window.location.reload();
        }
        console.log(this.state.members)
    }

    async editarMembro() {
        const form = new FormData();
        form.append("name", this.state.name);
        form.append("occupation", this.state.occupation);
        if (this.state.avatar) form.append("avatar", this.state.avatar);
        try {
            await api.put(`/members/${this.state.id}`, form, { headers: { 'content-type': 'multipart/form-data' } })
                .then(response => {
                    console.log(response.data)
                    alert('Membro editado com sucesso.');
                    window.location.reload();
                })

        } catch (error) {
            console.log(error);
            alert('Erro ao editar o membro.')
        }

    }

    showMembro(member) {
        this.setState({ isVisible: true, name: member.name, 
            occupation: member.occupation,avatar2: member.avatar, id: member._id })
    }
    hideMembro() {
        this.setState({ isVisible: false, src: null })
        console.log(this.state.name)
    }
    handleChangeImage = e => {
        e.preventDefault();

        let reader = new FileReader();
        let image = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                avatar: image,
                avatar2: image,
                src: reader.result,
                changeSrc: true,
            });
        }
        reader.readAsDataURL(image)
    }
    render() {
        const { members } = this.state;
        return (
            <div className='EditMembros' style={{ display: this.props.displayEditMembro }}>
                {this.state.isVisible ?
                    <div className='membroCompleto'>
                        <div className='modalMembro'>
                            <FontAwesomeIcon icon={faTimes} color="black" className="Cancel" onClick={() => { this.hideMembro() }} />
                             <input type='text' value={this.state.name} onChange={e=>this.setState({name: e.target.value})} />
                            <div className='fotoMembroEdit'>
                                {this.state.avatar2 ?
                                    <img alt='fotomembro' className='imageMembro' src={this.state.changeSrc ? this.state.src : 'https://api-ejcomp-site.herokuapp.com/members/' + this.state.avatar2.filename} ></img>
                                    : <p>Sem foto</p>}
                            </div>
                            <input type='file' onChange={this.handleChangeImage} placeholder='Adicionar Imagem' className='btnImage' />
                            <input type='text' value={this.state.occupation} onChange={e=>this.setState({occupation: e.target.value})} />
                            <div className='buttonsEdit'>
                                <button onClick={() => this.excluirMembro()}>Excluir membro</button>
                                <button onClick={() => this.editarMembro()}> Editar membro</button>
                            </div>
                        </div>
                    </div> : null}
                    <div className='headerBlog'>
                    <h3>Equipe</h3>
                    <h5>Editar Membro</h5>
                    <FontAwesomeIcon style={{marginLeft: '20px'}} icon={faAngleRight}  color='gray' id="setaBlog" />
                </div>
                <h3 style={{ marginTop: '5%' , textAlign: 'center'}}>Selecione qual arquivo deseja alterar</h3>
                <div className='containerEditMembros'>
                    {members.length > 0 ?
                        members.map(member => (
                            <div key={member._id} className='cardMembros' onClick={() => this.showMembro(member)}>
                                <h4 className='tituloEdit'>{member.name}</h4>
                                {member.avatar !== null ?
                                    < img alt='fotoMembro' className='imageMembro' src={'https://api-ejcomp-site.herokuapp.com/members/' + member.avatar.filename} />
                                    : <p>Membro sem foto</p>
                                }
                            </div>
                        )) : <h3 className='textMembro'>Ainda não contém nenhum Membro</h3>
                    }
                </div>
            </div>
        )
    }
}