import React from 'react';
import './Mej.css'
import ScrollAnimation from 'react-animate-on-scroll';


export default class TelaMej extends React.Component {
  render() {
    return (
      <div className="TelaMej" id={this.props.id}>
        <div className="row-1">
          <ScrollAnimation animateIn="fadeScale">
            <div id="LogoBrJr" />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeLeft">
            <div id="TextBrJr">
              <p align="justify">  O Movimento Empresa Júnior, representa e engloba um conjunto de empresas juniores. Essas, por sua vez, reúnem jovens determinados e em prol do propósito de transformar o Brasil. As EJ's cumprem papel muito importante na vida desses jovens, formando e desenvolvendo, pessoal e profissionalmente, uma vez que são totalmente geridas por estes alunos. Muito importante também, é o seu impacto na realidade de quem contrata esses serviços, gerando resultados e qualidade sênior, por um preço muito mais acessível.</p>
            </div>
          </ScrollAnimation>
        </div>
        <div className="row-2">
          <ScrollAnimation animateIn="fadeRight">
            <div id="TextMej">
              <p align="justify">A EJComp participa desse movimento desde sua idealização em 2006. Ativamente, a empresa contribuiu modernizando com tecnologia, participando e organizando de eventos com o Núcleo Unesp, que acolheu a nossa EJ a partir de 2016 até 2018, quando os nossos membros participaram da criação do Núcleo que estaria em vigor no novo formato do MEJ Paulista: a fundação do Núcleo Bauru.
Hoje a EJComp, junto a Brasil Júnior, Fejesp e Núcleo Bauru, continua trazendo para os alunos de ciência da computação da FCT-Unesp, a vivência empresarial e uma formação continuada em desenvolvimento web e mobile.</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeScale">
            <div id="LogoMej" />
          </ScrollAnimation>
        </div>

      </div>
    );
  }
}
