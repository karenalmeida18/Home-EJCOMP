import React from 'react';
import Membros from './Membros'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Equipe.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import api from '../../Services/api'
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
            {this.state.members1.map(membro => (
              <Membros
                fotoMembro={'http://191.252.113.79:5875/members/' + membro.avatar.filename}
                textNome={membro.name}
                textCargo={membro.occupation}
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
            {this.state.members2.map(membro => (
              <Membros
                fotoMembro={'http://191.252.113.79:5875/members/' + membro.avatar.filename}
                textNome={membro.name}
                textCargo={membro.occupation}
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


