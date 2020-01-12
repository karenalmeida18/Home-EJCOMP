import React from 'react';
import Grid from '@material-ui/core/Grid';
import './portfolio.css';
import Navbar from '../Navbar/Navbar';
import MenuMobile from '../MenuMobile/MenuMobile'
import PortCard from './PortCard';
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

const imagesPort = [
   {
     image1: pedagogia,
     image2: pedagogiapng,
     text: "texto"
   },
   {
     image1: welcomej,
     image2: welcomejpng,
     text: "texto"
   },
   {
     image1: humanus,
     image2: humanuspng,
     text: "texto"
   },
    {
      image1: carnailha,
      image2: carnailhapng,
      text: "texto"
    },
   {
     image1: capjr,
     image2: capjrpng,
     text: "texto"
   },
   {
    image1: dvora,
    image2: dvorapng,
    text: "texto"
   },
   {
    image1: farmatudo,
    image2: farmatudopng,
    text: "texto"
   },
   {
    image1: fixunesp,
    image2: fixunesppng,
    text: "texto"
   },
   {
    image1: vilaverde,
    image2: vilaverdepng,
    text: "texto"
   },
   {
    image1: mapafejesp,
    image2: mapafejesppng,
    text: "texto"
   },
   {
    image1: mapapromex,
    image2: promexpng,
    text: "texto"
   },

]
const Portfolio = function () {
  return(
    <div id='portfolio'>
    <Navbar backgroundColor='white' color='#12264A' logo='logo' className='itemMenu' />    
    <div id="menu"> <MenuMobile /> </div>
    <div className="Portfolio">
      <p style={{marginBottom: '10px', fontSize: '200%', color: '#12264A'}}>NOSSO PORTFÓLIO</p>
            <div className="hr-style rollIn" style={{alignSelf: 'center'}}></div>
            <h3 style={{marginBottom: '10px', color: '#12264A'}}>Lorem </h3>
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
    </div>
  );
}

export default Portfolio;