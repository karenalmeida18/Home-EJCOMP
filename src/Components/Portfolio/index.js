import React from 'react';
import Grid from '@material-ui/core/Grid';
import './portfolio.css';
import Navbar from '../Navbar/Navbar';
import MenuMobile from '../MenuMobile/MenuMobile'
import PortCard from './PortCard';
import Footer from '../Footer/Footer'
import { api, baseURL }  from '../../Services/api'
export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ports: []
    }
  }
  async componentDidMount() {
    const response = await api.get(`/portfolio/`)
    console.log(response.data.portfolio);
    this.setState({
        ports: response.data.portfolio,
    })
}
  render() {
    return (
      <div id='portfolio'>
        <Navbar backgroundColor='white' color='#12264A' logo='logoNav' className='itemMenuMej' />
        <div id="menu"> <MenuMobile /> </div>
        <div className="Portfolio">
          <p style={{ marginBottom: '10px', fontSize: '200%', color: '#12264A' }}>NOSSO PORTFÓLIO</p>
          <div className="hr-style rollIn" style={{ alignSelf: 'center' }}></div>
          <h3 style={{ marginBottom: '10px', color: '#12264A' }}>Veja alguns de Nossos Projetos!</h3>
          <Grid
            container
            spacing={2}
          >

            {this.state.ports.map(tile => (
              <Grid
                item
                xs={12} sm={6} md={4} lg={4} xl={3}
              >

                <PortCard
                  image1={baseURL + '/portfolio/' + tile.photos_1[0].filename}
                  image2={baseURL + '/portfolio/' + tile.photos_2[0].filename}
                  text={tile.description}
                />
              </Grid>
            ))
            }
          </Grid>
        </div>
        <Footer color='white' backgroundColor='#1b1b1b' textColor='white' />
      </div>

    );
  }
}

