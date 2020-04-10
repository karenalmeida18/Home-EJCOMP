import React from 'react';
import Membros from './Membros'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Equipe.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import api from '../../Services/api'
import MenuMobile from '../MenuMobile/MenuMobile'
import membro1 from '../../Imagem/membro1.jpeg'
import membro2 from '../../Imagem/membro2.jpeg'
import membro3 from '../../Imagem/membro3.jpeg'
import membro4 from '../../Imagem/membro4.jpeg'
import membro5 from '../../Imagem/membro5.jpeg'
import membro6 from '../../Imagem/membro6.jpeg'
import membro7 from '../../Imagem/membro7.jpeg'
import membro8 from '../../Imagem/membro8.jpeg'
import membro9 from '../../Imagem/membro9.jpeg'
import membro10 from '../../Imagem/membro10.jpeg'
import membro11 from '../../Imagem/membro11.jpeg'
import membro12 from '../../Imagem/m12.jpeg'
import semFoto from '../../Imagem/perfilsemfoto.jpg'
const imagensEquipeLinha1 = [
  {
    fotoMembro: membro1,
    textNome: 'João Pedro',
    textCargo: 'Diretor de Relações Externas'
  },
  {
    fotoMembro: membro2,
    textNome: 'Gabriel Santos',
    textCargo: 'Membro de Projetos'
  },
  {
    fotoMembro: membro3,
    textNome: 'Karen Almeida',
    textCargo: 'Membro de Projetos'
  },
  {
    fotoMembro: membro4,
    textNome: 'Maria Eduarda',
    textCargo: 'Membro de Relações Externas'
  },
  {
    fotoMembro: membro5,
    textNome: 'Guilherme Couto',
    textCargo: 'Gerente de Projetos'
  },
  {
    fotoMembro: semFoto,
    textNome: 'Gabriel Rocha',
    textCargo: 'Diretor de Finanças e Administração'
  },
  {
    fotoMembro: semFoto,
    textNome: 'Gabriela Tamashiro',
    textCargo: 'Membro de Projetos'
  },
  {
    fotoMembro: semFoto,
    textNome: 'Jõao Guilherme',
    textCargo: 'Diretor Presidente'
  },
  {
    fotoMembro: semFoto,
    textNome: 'Lóren',
    textCargo: 'Membro de Recursos Humanos'
  },
  {
    fotoMembro: semFoto,
    textNome: 'Leonardo Lucas',
    textCargo: 'Membro de Recursos Humanos'
  },
  {
    fotoMembro: semFoto,
    textNome: 'Carlos Alberto',
    textCargo: 'Membro de Relações Externas'
  },
  {
    fotoMembro: semFoto,
    textNome: 'Luiz Guilherme',
    textCargo: 'Gerente de Projetos'
  },
  {
    fotoMembro: semFoto,
    textNome: 'Andrey',
    textCargo: 'Membro de Relações Externas'
  },
]
const imagensEquipeLinha2 = [
  {
    fotoMembro: membro6,
    textNome: 'Maykon Douglas',
    textCargo: 'Membro de Projetos'
  },
  {
    fotoMembro: membro7,
    textNome: 'Evandro Duarte',
    textCargo: 'Membro de Projetos'
  },
  {
    fotoMembro: membro8,
    textNome: 'Breno Maia',
    textCargo: 'Gerente de Projetos'
  },
  {
    fotoMembro: membro9,
    textNome: 'Ana Luisa',
    textCargo: 'Diretora de Projetos'
  },
  {
    fotoMembro: membro10,
    textNome: 'Bruna Anselmo',
    textCargo: 'Membro de Recursos Humanos'
  },
  {
    fotoMembro: membro11,
    textNome: 'Lucas Honorato',
    textCargo: 'Membro de Projetos'
  },
  {
    fotoMembro: membro12,
    textNome: 'André Campos',
    textCargo: 'Gerente de Projetos'
  },
  {
    fotoMembro: semFoto,
    textNome: 'Luiz Filipe',
    textCargo: 'Gerente de Projetos'
  },
  {
    fotoMembro: semFoto,
    textNome: 'Erick Takao',
    textCargo: 'Membro de Projetos'
  },
  {
    fotoMembro: semFoto,
    textNome: 'Vinicius Polachini',
    textCargo: 'Membro de Projetos'
  },
  {
    fotoMembro: semFoto,
    textNome: 'Mauricio Rodrigues',
    textCargo: 'Diretor de Recursos Humanos e Vice-Presidente'
  },
  {
    fotoMembro: semFoto,
    textNome: 'Leonardo Higuti',
    textCargo: 'Membro de Projetos'
  },
  {
    fotoMembro: semFoto,
    textNome: 'Lucas Leal',
    textCargo: 'Gerente de Relações Externas'
  },
  {
    fotoMembro: semFoto,
    textNome: 'Juan Cardoso',
    textCargo: 'Membro de Projetos'
  },
  {
    fotoMembro: semFoto,
    textNome: 'Gustavo Oliveira',
    textCargo: 'Membro de Finanças e Administração'
  },
  {
    fotoMembro: semFoto,
    textNome: 'Weslley Campos',
    textCargo: 'Membro de Relações Externas'
  },
]
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

export default class Equipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members1: [],
      members2: [],
    }
  }

  async componentDidMount() {
    const response = await api.get(`/members/`)
    console.log(response.data.members);
    const tam = parseInt(response.data.members.length / 2);
    let aux1 = [];
    let aux2 = [];
    for (var i = 0; i < tam; i++) {
      aux1.push(response.data.members[i])
    }
    for (var j = tam; j < response.data.members.length; j++) {
      aux2.push(response.data.members[j])
    }
    this.setState({ members1: aux1, members2: aux2 })
  }
  render() {
    return (
      <div>
        <div className="Equipe">
          <Navbar color='white' logo='Logo' className='itemMenu' backgroundColor='#12264A' />
          <div id="menu"> <MenuMobile /> </div>
          <div className="TittleEquipe fadeBottom">
            <p>NOSSA EQUIPE</p>
            <div className="hrEquipe"></div>
          </div>
          <Carousel additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            containerClass="tstr"
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
            className="fadeScale"
          >
            {imagensEquipeLinha1.map(tile => (
              <Membros
                fotoMembro={tile.fotoMembro}
                textNome={tile.textNome}
                textCargo={tile.textCargo}
              />
            ))
            }


          </Carousel>
          <Carousel additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            containerClass=""
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
            swipeable
            className="fadeScale">
            {imagensEquipeLinha2.map(tile => (
              <Membros
                fotoMembro={tile.fotoMembro}
                textNome={tile.textNome}
                textCargo={tile.textCargo}
              />
            ))
            }

          </Carousel>

        </div>
        <Footer color='#12264A' backgroundColor='#fafafa' textColor='#12264A' />

      </div>
    );
  }
}


