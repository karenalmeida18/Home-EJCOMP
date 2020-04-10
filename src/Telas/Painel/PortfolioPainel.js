import React ,{Component} from 'react';
import './PortfolioPainel.css';
import api from '../../Services/api';
export default class PortfolioPainel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description:"",
            image1: null,
            image2: null,
            src1: '',
            src2: '',
        }
    }
    handleChangeName= event => {
        this.setState({ name: event.target.value });
    }
    handleChangeDescription= event => {
        this.setState({ description: event.target.value });
    }

    handleChangeImage1= e => {
        e.preventDefault();

        let reader = new FileReader();
        let image1 = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            image1: image1,
            src1: reader.result
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
            src2: reader.result
          });
        }
        reader.readAsDataURL(image2)
    }

    createPost = async event => {
        event.preventDefault();
        let data = new FormData();
        data.append("name",this.state.name);
        data.append("description",this.state.description);
        data.append("photos", this.state.image1);
        data.append("photos", this.state.image2);
        try{
            await api.post("/portfolio",data, {headers:{'Content-Type': 'multipart/form-data'}} )
            .then(response=>{
                console.log(response.data)
                this.setState({name:'',description:'',image1:null, image2:null});
                alert('portfolio criado com sucesso.');
                window.location.reload();
            })
            
        }catch(error){
            console.log(error);
            alert('erro ao criar portfolio.')
        }

    }
    render () {
        return (
                <div className='portPage' style={{display: this.props.displayPort}}>
                    <div className='headerPort'><p>Portfolio</p></div>
                    <div className='containerPort'>
                        <div>
                            <div className='sectionPortImg'>
                                <p>Imagem Primária</p>  
                                <div className='fotoPort1'>
                                    <img className='imagePreview' src={this.state.src1} alt='imagePost'/>
                                </div>    
                                <input type='file' onChange={this.handleChangeImage1} className='inputButton' placeholder='escolher imagem'/>                       
                            </div>
                            <div className='sectionPortImg'>
                                <p>Imagem Dispositivos</p>  
                                <div className='fotoPort2'>
                                    <img className='imagePreview' src={this.state.src2} alt='imagePost'/>
                                </div>
                                <input type='file' onChange={this.handleChangeImage2} className='inputButton' placeholder='escolher imagem'/>
                            </div>
                        </div>
                        <div className='textsPort'>
                            <div className='sectionPortTextNome'>
                                <p>Nome</p>
                                <input type='adicionar ' placeholder='Adicionar' value={this.state.name} onChange={this.handleChangeName}/>
                            </div>
                            <div className='sectionPortTextDesc'>
                                <p>Descrição</p>
                                <input type='adicionar1' placeholder='Adicionar' value={this.state.description} onChange={this.handleChangeDescription}/>
                                <button type='submit' onClick={this.createPost} className='concluir'>concluir</button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

