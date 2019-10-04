import React from 'react';
import '../Style/Button.css';

export default class ButtonsHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'transparent',
            color: 'white'
        };
    }
    alterarEstado = () => {
        this.setState({ isVisible: true, backgroundColor: 'white', color: 'black' });
    }
    estadoInicial = () => {
        this.setState({ isVisible: false, backgroundColor: 'transparent', color: 'white' });
    }
    render() {
        return (
            <button id="btn" style={{backgroundColor : this.state.backgroundColor, color: this.state.color}} onMouseEnter={this.alterarEstado} onMouseLeave={this.estadoInicial}>
                {this.state.isVisible ?
                    <div id={this.props.idTexto}>
                        <p>{this.props.Texto}</p> </div>
                    : null} {this.props.nome} </button>
        );
    }
}

