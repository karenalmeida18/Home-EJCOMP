import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'
export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }
    showLi = () => {
        this.setState({ isVisible: true })
    }
    hideLi = () => {
        this.setState({ isVisible: false })
    }
    render() {
        return (
            <div id="Navbar" style={{ color: this.props.color, backgroundColor: this.props.backgroundColor }}>
                <div className='itemLogo'><li className={this.props.logo}>{/*logo muda de acordo com a tela*/}</li></div>
                <div className="itensNav">
                    <div className={this.props.className}><li><Link to='/'>HOME</Link></li></div>
                    <div className={this.props.className}><li><Link to='./empresa'>EMPRESA</Link></li></div>
                    <div className={this.props.className}><li><Link to='Mej'>MEJ</Link></li></div>
                    <div className={this.props.className}onMouseEnter={this.showLi} onMouseLeave={this.hideLi}><li> <Link to='./serviços'>SERVIÇOS</Link></li> 
                        {this.state.isVisible ?
                            <ul className='dropdownLi' >
                                <li>PORTIFÓLIO</li>
                                <li>PROJETOS</li>
                            </ul>
                            : null}

                    </div>
                    <div className={this.props.className}><li><Link to='/equipe'>EQUIPE</Link></li></div>
                    <div className={this.props.className}><li>BLOG</li></div>
                </div>
            </div>
        )
    }
}