import React from 'react';
import Home from '../Home/TelaHome'
import Mej from '../Mej/Mej'
import Empresa from '../Empresa/Empresa'
import Footer from '../Footer/Footer'

export default class Principal extends React.Component{
    render(){
        return(
           <div className='Principal'>
               <Home/>
               <Empresa/>
               <Mej/>
               <Footer/>
              
               
           </div>

        );
    }
}