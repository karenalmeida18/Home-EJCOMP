import React from 'react';
import './Button.css';

export default class ButtonsHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'transparent',
            color: 'blue',
            border: '1.5px solid blue'
        };
    }
    alterarEstado = () => {
        this.setState({ isVisible: true, backgroundColor: 'yellow', color: 'blue', border : '1.5px solid yellow' });
    }
    estadoInicial = () => {
        this.setState({ isVisible: false, backgroundColor: 'transparent', color: 'blue', border : '1.5px solid blue' });
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

