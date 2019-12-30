import React from 'react';
import Membros from './Membros'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Equipe.css'
import Navbar from '../Navbar/Navbar'
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
      <Navbar color='white' logo='logo' className='itemMenu' />
      <div id="menuEquipe"> <MenuMobile /> </div>
      <div className="TittleEquipe">
        <h2>NOSSA EQUIPE</h2>
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
        <Membros titulo='João Pedro' funçao='Diretor de Relações Externas' classImg='FotoMembro m1' />
        <Membros titulo='Gabriel' funçao='Membro de Projetos' classImg='FotoMembro m2' />
        <Membros titulo='Karen' funçao='Membro de Projetos' classImg='FotoMembro m3' />
        <Membros titulo='Maria Eduarda' funçao='Membro de Relações Externas' classImg='FotoMembro m4' />
        <Membros titulo='Guilherme Couto' funçao='Gerente de Projetos' classImg='FotoMembro m5' />
        <Membros titulo='Nome' funçao='cargo' classImg='FotoMembro m6' />
        <Membros titulo='Nome' funçao='cargo' classImg='FotoMembro m7' />
        <Membros titulo='Nome' funçao='cargo' classImg='FotoMembro m8' />
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
        <Membros titulo='Maykon' funçao='Membro de Projetos' classImg='FotoMembro m9' />
        <Membros titulo='Evandro' funçao='Membro de Projetos' classImg='FotoMembro m10' />
        <Membros titulo='Breno' funçao='Membro de Projetos' classImg='FotoMembro m11' />
        <Membros titulo='Ana Luisa' funçao='Diretor de Projetos' classImg='FotoMembro m12' />
        <Membros titulo='Bruna' funçao='Membro de Recurso Humanos' classImg='FotoMembro m13' />
        <Membros titulo='Lucas' funçao='Membro de Projetos' classImg='FotoMembro m14' />
        <Membros titulo='Nome' funçao='cargo' classImg='FotoMembro' />
        <Membros titulo='Nome' funçao='cargo' classImg='FotoMembro' />
      </Carousel>

    </div>
  );
}


