import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { Storage, Laptop, Smartphone } from '@material-ui/icons';
import "./cards.css";

export default class Card extends Component{    
    render (){ 
    return (   
        <>   
        <div className="services" id={this.props.id}>
            <p style={{marginBottom: '10px', fontSize: '200%', color: '#12264A'}}>O QUE FAZEMOS?</p>
            <div className="hr-style" style={{alignSelf: 'center'}}>
            </div>
          <Grid container spacing={2}>
            <Grid item xs>
            <div className="cardsproj">
                <IconButton>
                    <Laptop style={{fontSize: '150px', color: '#12264A'}}/>
                </IconButton>
            </div>
            <div id="divSites" className="fadeRight">
                <p style={{fontSize: '150%', marginBottom: '10px'}}>Sites</p>
                <h4 align="justify">A EJComp utiliza das ferramentas mais atualizadas do mercado para a criação de sites 
                    profissionais e administráveis, ou seja, totalmente dinâmico!Faremos o leavantamento 
                    das suas necessidades através de perguntas no Briefing, para entendermos melhor sua expectativa. 
                    Após esse levantamento, começaremos o desenvolvimento desde o design até a publicação do site.
                    Se você deseja fazer um site, veio ao local certo. Confira alguns de nossos projetos
                </h4>

            </div>
            </Grid>
            <Grid item xs>
            <div className="cardsproj">
                <IconButton>
                    <Smartphone style={{fontSize: '150px',  color: '#12264A'}}/>
                </IconButton>
            </div>
            <div id="divApps" className="fadeScale">
                <p style={{fontSize: '150%',  marginBottom: '10px'}}>Aplicativos</p>
                <h4 align="justify">A EJComp utiliza das ferramentas mais atualizadas do mercado para a criação de sites 
                    profissionais e administráveis, ou seja, totalmente dinâmico!Faremos o leavantamento 
                    das suas necessidades através de perguntas no Briefing, para entendermos melhor sua expectativa. 
                    Após esse levantamento, começaremos o desenvolvimento desde o design até a publicação do site.
                    Se você deseja fazer um site, veio ao local certo. Confira alguns de nossos projetos
                </h4>

            </div>
            <div id = "divApps" className="fadeScale"></div>
            </Grid>
            <Grid item xs>
            <div className="cardsproj">
                <IconButton onMouseEnter={this.sistemas} onMouseOut={''}>
                    <Storage style={{fontSize: '150px', color: '#12264A'}}/>
                </IconButton> 
                
            </div>
            <div id="divSystem" className="fadeLeft">
            <p style={{fontSize: '150%',  marginBottom: '10px'}}>Sistemas</p>
                <h4 align="justify">A EJComp utiliza das ferramentas mais atualizadas do mercado para a criação de sites 
                    profissionais e administráveis, ou seja, totalmente dinâmico!Faremos o leavantamento 
                    das suas necessidades através de perguntas no Briefing, para entendermos melhor sua expectativa. 
                    Após esse levantamento, começaremos o desenvolvimento desde o design até a publicação do site.
                    Se você deseja fazer um site, veio ao local certo. Confira alguns de nossos projetos
                </h4>
            </div>
            </Grid>
          </Grid>
          </div>
        </>
    );
}
}
    

