import React from 'react'
import { Button } from 'semantic-ui-react'
import './Empresa.css'
import Navbar from '../Navbar/Navbar';
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
                <div className="bg-image"></div>
                <div className="content">
                    <Navbar color='white' logo='logoAzul' className='itemMenu' />
                    <h2>A EMPRESA</h2>
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non felis libero. Aenean sed nisi sit amet neque scelerisque elementum. Sed suscipit auctor quam quis sagittis.</p>
                    </div>
                    <Button onClick={this.showModal} className='buttonEmpresa' primary>ENTRE EM CONTATO</Button>
                    {this.state.isVisible ?
                        <Contato click={this.hideModal} />
                        : null
                    }

                </div>
            </div>

        )
    }
}