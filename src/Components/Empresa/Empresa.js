import React from 'react'
import { Button } from 'semantic-ui-react'
import './Empresa.css'
import Contato from '../Contato/Contato'

export default class Empresa extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    showModal = () => {
        this.setState({ isVisible: true });
    };
    hideModal = () => {
        this.setState({ isVisible: false });
    };
    render() {
        return (
            <div className="empresa">
                <div className="EmpresaRow1">
                    <div id="logo_ej" className="fadeRight"> </div>
                    <div>
                        <h2 className="tituloEmpresa fadeTop">A EMPRESA</h2>
                        <p className="textEmpresa fadeLeft">Fundada em 2006 e reestruturada 10 anos depois, a EJCOMP é uma Empresa Júnior de computação inteiramente composta e gerida por alunos do curso Ciência da Computação, da FCT - Unesp de Presidente Prudente. Em 2016 voltamos à ativa, e em 2018 conquistamos a nossa federação à FEJESP. Assim, passamos a atuar cada vez mais fortes e competentes dentro do estado de São Paulo, e Brasil adentro.</p>
                        <Button onClick={this.showModal} className='buttonEmpresa fadeRight' primary>ENTRE EM CONTATO</Button>
                        {this.state.isVisible ?
                            <Contato click={this.hideModal} />
                            : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}