import React from 'react';
import './Navbar.css'
import { HashLink as NavLink } from 'react-router-hash-link';

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
                    <NavLink activeClassName="selected" className={this.props.className} to={"/#section1"}><li>HOME</li></NavLink>
                    <NavLink activeClassName="selected" className={this.props.className} to={"/#section2"}><li>EMPRESA</li></NavLink>
                    <NavLink activeClassName="selected" className={this.props.className} to={"/#section3"}><li>MEJ</li></NavLink>
                    < NavLink to='/serviços' className={this.props.className} onMouseEnter={this.showLi} onMouseLeave={this.hideLi}> <li>SERVIÇOS</li>
                        {this.state.isVisible ?
                            <ul className='dropdownLi' >
                                <NavLink activeClassName="selected" to="/portfolio"> <li>PORTIFÓLIO</li></NavLink>
                                <NavLink activeClassName="selected" to="/serviços"> <li>PROJETOS</li></NavLink>
                            </ul>
                            : null}
                    </NavLink>
                    <NavLink activeClassName="selected" className={this.props.className} to={"/equipe"}><li>EQUIPE</li></NavLink>
                    <NavLink activeClassName="selected" className={this.props.className} to={"/blog"}><li>BLOG</li></NavLink>
                </div>
            </div>
        )
    }
}