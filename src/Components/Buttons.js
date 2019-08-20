import React from 'react';
import '../Style/Button.css';

class ButtonHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    alterarEstado = () => {
        this.setState({ isVisible: true });
    }
    estadoInicial = () => {
        this.setState({ isVisible: false });
    }
    render() {
        return (
            <button id="btn" onMouseEnter={this.alterarEstado} onMouseLeave={this.estadoInicial}>
                {this.state.isVisible ?
                    <div id="texto">
                        <p>It is a long estabrs, as opposed to and a search for 'lorem ipsum' will uncover many web s
                        ites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes o
                n purpose (injected humour and the like).</p> </div>
                    : null} {this.props.nome} </button>
        );
    }
}
class ButtonEmpresa extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    alterarEstado = () => {
        this.setState({ isVisible: true });
    }
    estadoInicial = () => {
        this.setState({ isVisible: false });

    }
    render() {
        return (
            <button id="btn" onMouseEnter={this.alterarEstado} onMouseLeave={this.estadoInicial}>{this.state.isVisible ?
                <div id="texto2">
                    <p>It is a long estabrs, as opposed to and a search for 'lorem ipsum' will uncover many web s
                    ites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes o
n purpose (injected humour and the like).</p>
                </div> : null}{this.props.nome} </button>
        );
    }
}
class ButtonMej extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    alterarEstado = () => {
        this.setState({ isVisible: true });
    }
    estadoInicial = () => {
        this.setState({ isVisible: false });

    }
    render() {
        return (
            <button id="btn" onMouseEnter={this.alterarEstado} onMouseLeave={this.estadoInicial}>{this.state.isVisible ?
                <div id="texto3">
                    <p>It is a long estabrs, as opposed to and a search for 'lorem ipsum' will uncover many web s
                    ites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes o
n purpose (injected humour and the like).</p>
                </div> : null}{this.props.nome} </button>
        );
    }
}
class ButtonServiços extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    alterarEstado = () => {
        this.setState({ isVisible: true });
    }
    estadoInicial = (e) => {
        this.setState({ isVisible: false });

    }
    render() {
        return (
            <button id="btn" onMouseEnter={this.alterarEstado} onMouseLeave={this.estadoInicial}>{this.state.isVisible ?
                <div id="texto4">
                    <p>It is a long estabrs, as opposed to and a search for 'lorem ipsum' will uncover many web s
                    ites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes o
n purpose (injected humour and the like).</p></div> : null}{this.props.nome} </button>
        );
    }
}
class ButtonEquipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    alterarEstado = () => {
        this.setState({ isVisible: true });
    }
    estadoInicial = () => {
        this.setState({ isVisible: false });

    }
    render() {
        return (
            <button id="btn" onMouseEnter={this.alterarEstado} onMouseLeave={this.estadoInicial}>{this.state.isVisible ?
                <div id="texto5">
                    <p>It is a long estabrs, as opposed to and a search for 'lorem ipsum' will uncover many web s
                    ites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes o
n purpose (injected humour and the like).</p></div> : null}{this.props.nome} </button>
        );
    }
}
class ButtonBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    alterarEstado = () => {
        this.setState({ isVisible: true });
    }
    estadoInicial = () => {
        this.setState({ isVisible: false });

    }
    render() {
        return (
            <button id="btn" onMouseEnter={this.alterarEstado} onMouseLeave={this.estadoInicial}>{this.state.isVisible ?
                <div id="texto6">
                    <p>It is a long estabrs, as opposed to and a search for 'lorem ipsum' will uncover many web s
                    ites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes o
        n purpose (injected humour and the like).</p>
                </div> : null}{this.props.nome} </button>
        );
    }
}
export { ButtonHome, ButtonEmpresa, ButtonMej, ButtonServiços, ButtonEquipe, ButtonBlog };