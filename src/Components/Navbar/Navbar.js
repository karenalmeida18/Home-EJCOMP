import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';

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
            <div id="Navbar" style={{ color: this.props.color, backgroundColor: this.props.backgroundColor, display: this.props.display }}>
                <div className='itemLogo'><li className={this.props.logo}></li></div>
                <div className="itensNav">
                    <Link smooth className={this.props.className} to={"/#section1"}><li>HOME</li></Link>
                    <Link smooth className={this.props.className} to={"/#section2"}><li>EMPRESA</li></Link>
                    <Link smooth className={this.props.className} to={"/#section3"}><li>MEJ</li></Link>
                      < NavLink to='/serviços' className={this.props.className}onMouseEnter={this.showLi} onMouseLeave={this.hideLi}> <li>SERVIÇOS</li>
                        {this.state.isVisible ? 
                            <ul className='dropdownLi' >
                                <li>PORTIFÓLIO</li>
                                <li>PROJETOS</li>
                            </ul>
                            : null}
                        </NavLink>
                    
                    <div className={this.props.className}><li><Link to='/equipe'>EQUIPE</Link></li></div>
                    <div className={this.props.className}><li><Link to='/blog'>BLOG</Link></li></div>
                </div>
            </div>
        )
    }
}