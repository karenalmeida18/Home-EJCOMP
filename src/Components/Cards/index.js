import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { Storage, Laptop, Smartphone } from '@material-ui/icons';
import "./cards.css";
import Navbar from '../Navbar/Navbar';
import MenuMobile from '../MenuMobile/MenuMobile'

export default class Card extends Component{
    constructor(props){
        super(props);
        this.sites = this.sites.bind(this);
    }
    sites(){
        var div=  document.getElementById('divSites');
        div.innerHTML = "<p>Sites</p><br><h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>";
           
    }
    aplicativos(){
        var div=  document.getElementById('divApps');
        div.innerHTML = "<p>Aplicativos</p><br><h4>Borem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>";
    }
    sistemas(){
        var div=  document.getElementById('divSystem');
        div.innerHTML = "<p>Sistemas</p><br><h4>Corem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>";
    }
    hideInfo = event => {

    }
    render (){ 
    return (   
        <>   
        <div className="services">
        <Navbar color='#12264A' logo='logo' className='itemMenu' />
        <div id="menuEquipe"> <MenuMobile /> </div>
            <p style={{marginBottom: '10px', fontSize: '200%', color: '#12264A'}}>O QUE FAZEMOS?</p>
            <div className="hr-style" style={{alignSelf: 'center'}}>
            </div>
          <Grid container spacing={2}>
            <Grid item xs>
            <div className="cardsproj">
                <IconButton onMouseEnter={this.sites} onMouseOut={''}>
                    <Laptop style={{fontSize: '150px', color: '#12264A'}}/>
                </IconButton>
            </div>
            <div id="divSites"></div>
            </Grid>
            <Grid item xs>
            <div className="cardsproj">
                <IconButton onMouseEnter={this.aplicativos} onMouseLeave={''}>
                    <Smartphone style={{fontSize: '150px',  color: '#12264A'}}/>
                </IconButton>
            </div>
            <div id = "divApps"></div>
            </Grid>
            <Grid item xs>
            <div className="cardsproj">
                <IconButton onMouseEnter={this.sistemas} onMouseOut={''}>
                    <Storage style={{fontSize: '150px', color: '#12264A'}}/>
                </IconButton> 
                
            </div>
            <div id="divSystem"></div>
            </Grid>
          </Grid>
          </div>
        </>
    );
}
}
    

