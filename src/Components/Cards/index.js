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
        </div>
          <Grid 
          container 
          direction="column"
          justify="left"
          spacing={2}>
            <Grid item xs>
            <ScrollAnimation animateIn="fadeTop">
            <div className="cardsproj">
                    <Laptop style={{fontSize: '50px', color: '#12264A'}}/>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeLeft">
            <div id="divSites">
                <p style={{fontSize: '150%', marginBottom: '10px', fontWeight: 'bold'}}>Sites</p>
                <h4 align="justify">A EJComp utiliza das ferramentas mais atualizadas do mercado para a criação de sites 
                    profissionais e administráveis, ou seja, totalmente dinâmico!Faremos o leavantamento 
                    das suas necessidades através de perguntas no Briefing, para entendermos melhor sua expectativa. 
                    Após esse levantamento, começaremos o desenvolvimento desde o design até a publicação do site.
                    Se você deseja fazer um site, veio ao local certo. Confira alguns de nossos projetos
                </h4>

            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeRight">
                <hr className="hr-text1"/>
            </ScrollAnimation>
            </Grid>
            <Grid item xs>
            <ScrollAnimation animateIn="fadeTop">
            <div className="cardsproj" id="cardsprojApps">
                    <Smartphone style={{fontSize: '50px',  color: '#12264A'}}/>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeRight">
            <div id="divApps" className="fadeRight">
                <p style={{fontSize: '150%',  marginBottom: '10px', fontWeight: 'bold'}}>Aplicativos</p>
                <h4 style={{fontWeight: 'none'}} align="justify">A EJComp utiliza das ferramentas mais atualizadas do mercado para a criação de sites 
                    profissionais e administráveis, ou seja, totalmente dinâmico!Faremos o leavantamento 
                    das suas necessidades através de perguntas no Briefing, para entendermos melhor sua expectativa. 
                    Após esse levantamento, começaremos o desenvolvimento desde o design até a publicação do site.
                    Se você deseja fazer um site, veio ao local certo. Confira alguns de nossos projetos
                </h4>

            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeLeft">
                <hr className="hr-text2"/>
            </ScrollAnimation>
            </Grid>
            <Grid item xs>
            <ScrollAnimation animateIn="fadeTop">

            <div className="cardsproj">
                    <Storage style={{fontSize: '50px', color: '#12264A'}}/>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeLeft">
            <div id="divSystem" >
            <p style={{fontSize: '150%',  marginBottom: '10px', fontWeight: 'bold'}}>Sistemas</p>
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
        </>
    );
}
}
    

