import React from 'react';
import Membros from './Membros'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Equipe.css'
import Navbar from '../Navbar/Navbar'
import Logo from '../../Imagem/ejcomp.png'
import MenuMobile from '../MenuMobile/MenuMobile'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
export default function Equipe() {
  return (
    <div className="Equipe">
      <Navbar color='white' logo={Logo} className='itemMenu' />
      <div id="menuEquipe"> <MenuMobile /> </div>
      <div className="TittleEquipe">
        <h1>NOSSA EQUIPE</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and rinting simply dummy</p>
      </div>
      <Carousel additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className="CarouselStyle"
        containerClass="container"
        dotListClass="DotStyle"
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots
        sliderClass=""
        slidesToSlide={3}
        swipeable
      >
        <Membros titulo='Nome' funçao='cargo' classImg='FotoMembro' />
        <Membros titulo='Nome' funçao='cargo' classImg='FotoMembro' />
        <Membros titulo='Nome' funçao='cargo' classImg='FotoMembro' />
        <Membros titulo='Nome' funçao='cargo' classImg='FotoMembro' />
        <Membros titulo='Nome' funçao='cargo' classImg='FotoMembro' />
        <Membros titulo='Nome' funçao='cargo' classImg='FotoMembro' />
        <Membros titulo='Nome' funçao='cargo' classImg='FotoMembro' />
        <Membros titulo='Nome' funçao='cargo' classImg='FotoMembro' />
      </Carousel>
      <Carousel additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots
        sliderClass=""
        slidesToSlide={3}
        swipeable>
        <Membros titulo='Nome' funçao='cargo' classImg='FotoMembro' />
        <Membros titulo='Nome' funçao='cargo' classImg='FotoMembro' />
        <Membros titulo='Nome' funçao='cargo' classImg='FotoMembro' />
        <Membros titulo='Nome' funçao='cargo' classImg='FotoMembro' />
        <Membros titulo='Nome' funçao='cargo' classImg='FotoMembro' />
        <Membros titulo='Nome' funçao='cargo' classImg='FotoMembro' />
        <Membros titulo='Nome' funçao='cargo' classImg='FotoMembro' />
        <Membros titulo='Nome' funçao='cargo' classImg='FotoMembro' />
      </Carousel>

    </div>
  );
}


