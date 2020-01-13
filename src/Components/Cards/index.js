import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Storage, Laptop, Smartphone } from '@material-ui/icons';
import "./cards.css";
import ScrollAnimation from 'react-animate-on-scroll';

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
            <ScrollAnimation animateIn="fadeTop">
            <div className="cardsproj">
                    <Laptop style={{fontSize: '150px', color: '#12264A'}}/>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeRight">
            <div id="divSites">
                <p style={{fontSize: '150%', marginBottom: '10px'}}>Sites</p>
                <h4 align="justify">A EJComp utiliza das ferramentas mais atualizadas do mercado para a criação de sites 
                    profissionais e administráveis, ou seja, totalmente dinâmico!Faremos o leavantamento 
                    das suas necessidades através de perguntas no Briefing, para entendermos melhor sua expectativa. 
                    Após esse levantamento, começaremos o desenvolvimento desde o design até a publicação do site.
                    Se você deseja fazer um site, veio ao local certo. Confira alguns de nossos projetos
                </h4>

            </div>
            </ScrollAnimation>
            </Grid>
            <Grid item xs>
            <ScrollAnimation animateIn="fadeTop">
            <div className="cardsproj">
                    <Smartphone style={{fontSize: '150px',  color: '#12264A'}}/>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeScale">
            <div id="divApps" className="fadeScale">
                <p style={{fontSize: '150%',  marginBottom: '10px'}}>Aplicativos</p>
                <h4 align="justify">A EJComp utiliza das ferramentas mais atualizadas do mercado para a criação de sites 
                    profissionais e administráveis, ou seja, totalmente dinâmico!Faremos o leavantamento 
                    das suas necessidades através de perguntas no Briefing, para entendermos melhor sua expectativa. 
                    Após esse levantamento, começaremos o desenvolvimento desde o design até a publicação do site.
                    Se você deseja fazer um site, veio ao local certo. Confira alguns de nossos projetos
                </h4>

            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeScale">
            <div id = "divApps"></div>
            </ScrollAnimation>
            </Grid>
            <Grid item xs>
            <ScrollAnimation animateIn="fadeTop">

            <div className="cardsproj">
                    <Storage style={{fontSize: '150px', color: '#12264A'}}/>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeLeft">
            <div id="divSystem" >
            <p style={{fontSize: '150%',  marginBottom: '10px'}}>Sistemas</p>
                <h4 align="justify">A EJComp utiliza das ferramentas mais atualizadas do mercado para a criação de sites 
                    profissionais e administráveis, ou seja, totalmente dinâmico!Faremos o leavantamento 
                    das suas necessidades através de perguntas no Briefing, para entendermos melhor sua expectativa. 
                    Após esse levantamento, começaremos o desenvolvimento desde o design até a publicação do site.
                    Se você deseja fazer um site, veio ao local certo. Confira alguns de nossos projetos
                </h4>
            </div>
            </ScrollAnimation>
            </Grid>
          </Grid>
          </div>
        </>
    );
}
}
    

