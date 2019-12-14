import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { Storage, Laptop, Smartphone } from '@material-ui/icons';
import "./styles.css";

export default class Card extends Component{
    constructor(props){
        super(props);
        this.sites = this.sites.bind(this);
    }
    sites(){
        var div=  document.getElementById('divTeste');
        div.innerHTML = "<p>Sites</p><br><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>";

        
    }
    aplicativos(){
        var div=  document.getElementById('divTeste');
        div.innerHTML = "<p>Aplicativos</p><br><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>";
    }
    sistemas(){
        var div=  document.getElementById('divTeste');
        div.innerHTML = "<p>Sistemas</p><br><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>";
    }
    render (){ 
    return (      
        <div className="services">
            <p style={{marginBottom: '10px'}}>O QUE FAZEMOS?</p>
        <div>
          <Grid container spacing={2}>
            <Grid item xs>
            <div className="cardsproj">
                <IconButton onClick={this.sites}>
                    <Laptop style={{fontSize: '150px', color: '#12264A'}}/>
                </IconButton>
                
            </div>
            </Grid>
            <Grid item xs>
            <div className="cardsproj">
                <IconButton onClick={this.aplicativos}>
                    <Smartphone style={{fontSize: '150px',  color: '#12264A'}}/>
                </IconButton>
            </div>
            </Grid>
            <Grid item xs>
            <div className="cardsproj">
                <IconButton onClick={this.sistemas}>
                    <Storage style={{fontSize: '150px', color: '#12264A'}}/>
                </IconButton> 
            </div>
            </Grid>
          </Grid>
          </div>
          <div id = "divTeste"></div>
        </div>
        
    );
}
}
    

