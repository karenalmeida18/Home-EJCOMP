import React from 'react'
import Home from '../Home/TelaHome'
import Empresa from '../Empresa/Empresa'
import Footer from '../Footer/Footer'
import TelaMej from '../Mej/Mej'
import Navbar from '../Navbar/Navbar'
import Projetos from '../Cards/index'
import MenuMobile from '../MenuMobile/MenuMobile'

export default class Principal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className='Principal'>
                <div id="menu"> <MenuMobile /> </div> {/*Versao mobile do site */}
                <Home id='section1' />
                <Navbar  backgroundColor='white' logo='logoNav' className='itemMenuMej' />
                <Empresa id='section2' />
                <TelaMej id='section3' />
                <Projetos id= 'section4'/>
                <Footer color= 'white' backgroundColor='#1b1b1b' textColor= 'white' />

            
            </div>

        );
    }
}