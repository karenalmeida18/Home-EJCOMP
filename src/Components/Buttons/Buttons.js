import React from 'react';
import './Button.css';

export default class ButtonsHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'transparent',
            color: 'white',
            border: '1.4px solid white'
        };
    }
    alterarEstado = () => {
        this.setState({ isVisible: true, backgroundColor: '#EDEAE0', color: 'black', border : '1.4px solid white' });
    }
    estadoInicial = () => {
        this.setState({ isVisible: false, backgroundColor: 'transparent', color: 'white', border : '1.4px solid white' });
    }
    render() {
        return (
            <button id="btn" style={{backgroundColor : this.state.backgroundColor, color: this.state.color, border: this.state.border}}
             onMouseEnter={this.alterarEstado} onMouseLeave={this.estadoInicial}>
                {this.state.isVisible ?
                    <div id={this.props.idTexto}>
                        <p>{this.props.Texto}</p> </div>
                    : null} {this.props.nome} </button>
        );
    }
}

