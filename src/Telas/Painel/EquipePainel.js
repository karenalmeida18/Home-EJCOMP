import React from 'react'
import './EquipePainel.css'
import api from '../../Services/api'
export default class EquipePainel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            occupation: "",
            avatar: null,
            src: ""
        }
    }
    handleChangeName= event => {
        this.setState({name: event.target.value });
    }
    handleChangeOcuppation = event => {
        this.setState({ occupation: event.target.value });
    }
    handleChangeAvatar = e => {
        e.preventDefault();

        let reader = new FileReader();
        let image = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                avatar: image, 
                src: reader.result
            });
        }
        reader.readAsDataURL(image)
    }

    createMembro = async event => {
        event.preventDefault();

        let form = new FormData();
        form.append("name", this.state.name);
        form.append("occupation", this.state.occupation);
        form.append("avatar", this.state.avatar);
        try {
            await api.post("/members", form, {headers:{'Content-Type': 'multipart/form-data'}})
            .then(response=>{
                console.log(response.data);
                this.setState({name:'',occupation:'',avatar:null,src: ''});
                alert('Membro criado com sucesso');
                window.location.reload()
            })
        }
        catch(error) {
            console.log(error);
            alert('Erro ao criar membro.');
        }
    }
    render() {
        return (
            <div className='EquipePainel' style={{display: this.props.displayEq}} >
                <div className='headerEquipe'><p>Membro</p></div>
                <div className='containerEquipePainel'>
                    <div className='sectionMembroImagem'>
                        <p>Imagem</p>
                        <div className='fotoAdmMembro'>
                            <img className='imagePreview' src={this.state.src} alt='imageMember'/>
                        </div>
                        <input type='file' onChange={this.handleChangeAvatar} placeholder='Adicionar Imagem' className='containerButtons'/>
                    </div>
                    <div>
                    <div className='sectionMembroText'>
                        <p>Nome</p>
                        <input type='adicionar' placeholder='Adicionar' value={this.state.name} onChange={this.handleChangeName} />
                    </div>
                    <div className='sectionMembroText'>
                        <p>Cargo</p>
                        <input type='adicionar' placeholder='Adicionar' value={this.state.occupation} onChange={this.handleChangeOcuppation} />
                        <button type='submit' onClick={this.createMembro} className='concluir'>Concluir</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}