import React from 'react';
import './Equipe.css';

export default class Membros extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'none',
        };
    }
    showText = () => {
        this.setState(state => {
            return {
                display: 'block',

            }
        });
    }
    hideText = event => {
        this.setState(state => {
            return {
                display: 'none'

            }
        })
    }
    render() {
        return (
            <div className={this.props.classImg} onMouseEnter={this.showText}
                onMouseLeave={this.hideText}>
                <div className="NomeMembro" style={{ display: this.state.display }} >
                    <h2><strong>{this.props.titulo}</strong></h2>
                    <p>{this.props.funçao}</p>
                </div>
            </div>
        )
    };


}