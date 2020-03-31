import React from 'react';
import Grid from '@material-ui/core/Grid';
import './portfolio.css';
import Navbar from '../Navbar/Navbar';
import MenuMobile from '../MenuMobile/MenuMobile'
import PortCard from './PortCard';
import Footer from '../Footer/Footer'
import capjr from '../../Imagem/port/cap1.jpg'
import dvora from '../../Imagem/port/dvora2.png'
import farmatudo from '../../Imagem/port/farmatudo2.jpg'
import fixunesp from '../../Imagem/port/fixUnesp2.jpg'
import vilaverde from '../../Imagem/port/vilaVerde2.jpg'
import carnailha from '../../Imagem/port/carna.jpg'
import humanus from '../../Imagem/port/humanus2.jpg'
import welcomej from '../../Imagem/port/welcomej2.jpg'
import pedagogia from '../../Imagem/port/pedagogia2.jpg'
import mapafejesp from '../../Imagem/port/mapafejesp2.jpg'
import mapapromex from '../../Imagem/port/mapapromex2.jpg'
import pedagogiapng from '../../Imagem/port/pedagogiapng.png'
import welcomejpng from '../../Imagem/port/welcomejpng.png'
import humanuspng from '../../Imagem/port/humanuspng.png'
import carnailhapng from '../../Imagem/port/carnailhapng.png'
import capjrpng from '../../Imagem/port/pngcap.png'
import dvorapng from '../../Imagem/port/dvorapng.png'
import farmatudopng from '../../Imagem/port/farmatudopng.png'
import fixunesppng from '../../Imagem/port/fixunesppng.png'
import vilaverdepng from '../../Imagem/port/vilaverdepng.png'
import promexpng from '../../Imagem/port/promexpng.png'
import mapafejesppng from '../../Imagem/port/mapafejesppng.png'
import api from '../../Services/api'

const imagesPort = [
   {
     image1: pedagogia,
     image2: pedagogiapng,
     text: "Site e Sitema criados para o Congresso Pedagogia Histórico-Crítica 2018."
   },
   {
     image1: welcomej,
     image2: welcomejpng,
     text: "Site criado para o VI WelcoMEJ, evento para as empresas júniores da Unesp, sediado na cidade de Bauru-SP."
   },
   {
     image1: humanus,
     image2: humanuspng,
     text: "Site institucional da Empresa Júnior de Psicologia da UNESP de Assis."
   },
    {
      image1: carnailha,
      image2: carnailhapng,
      text: "Um dos maiores carnavais universitários do país, informações sobre o evento e ingressos."
    },
   {
     image1: capjr,
     image2: capjrpng,
     text: "Site institucional da Empresa Júnior de Ciências Agrárias e Veterinarias da UNESP de Jaboticabal."
   },
   {
    image1: dvora,
    image2: dvorapng,
    text: "Sistema de gerenciamento de Empresas Juniores, feito e usado com carinho pela EJComp."
   },
   {
    image1: farmatudo,
    image2: farmatudopng,
    text: "App que reune as farmácias da cidade e que fazem delivery de medicamentos."
   },
   {
    image1: fixunesp,
    image2: fixunesppng,
    text: "App que tem como finalidade ajudar na resolução de problemas internos nos campus da UNESP."
   },
   {
    image1: vilaverde,
    image2: vilaverdepng,
    text: "Informações sobre o hotel e suas atividades, mapa, reserva e muito mais em um aplicativo."
   },
   {
    image1: mapafejesp,
    image2: mapafejesppng,
    text: "Sistema de gerenciamento de empresas júniores para Fejesp (o nome da imagem é mapaFejesp)."
   },
   {
    image1: mapapromex,
    image2: promexpng,
    text: "Sistema de gerenciamento de contatos da Promex Decor (o nome da imagem é mapaPromex)."
   },

]
const Portfolio = function () {
  return(
    <div id='portfolio'>
    <Navbar backgroundColor='white' color='#12264A' logo='logoNav' className='itemMenuMej' />    
    <div id="menu"> <MenuMobile /> </div>
    <div className="Portfolio">
      <p style={{marginBottom: '10px', fontSize: '200%', color: '#12264A'}}>NOSSO PORTFÓLIO</p>
            <div className="hr-style rollIn" style={{alignSelf: 'center'}}></div>
            <h3 style={{marginBottom: '10px', color: '#12264A'}}>Veja alguns de Nossos Projetos!</h3>
                <Grid
                container
                spacing = {2}
                >
                
                  { imagesPort.map(tile => (
                    <Grid
                    item  
                    xs={12} sm={6} md={4} lg={4} xl={3}
                    >
                   
                      <PortCard 
                      image1={tile.image1}
                      image2={tile.image2}
                      text={tile.text}
                      />
                    </Grid>
                    ))
                  }                
        </Grid>
      </div>
      <Footer color= 'white' backgroundColor='#1b1b1b' textColor= 'white' />
    </div>
    
  );
}

export default Portfolio;
