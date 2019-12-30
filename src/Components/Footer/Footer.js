import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt,faMapMarkedAlt,faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';


export default class Footer extends React.Component{ 
    render (){
        return(
            <div className='footer'>
               <div id='InfoFooter'>
              <div className='Intext'> <FontAwesomeIcon icon={faPhoneAlt} size='1x' color='white' borderRadius='30px' className="IconesMidiaFooter" />  <p className='textfooter'> (18) 3229-5466 </p></div> 
             <div className='Intext'> <FontAwesomeIcon icon={faMapMarkedAlt} size='1x' color='white' borderRadius='30px' className="IconesMidiaFooter" />   <p className='textfooter'>
                Rua Roberto Simonsen, 305.
                19060-900 Presidente Prudente</p></div>
                <div className='Intext'><FontAwesomeIcon icon={faEnvelopeOpenText} size='1x' color='white' borderRadius='30px' className="IconesMidiaFooter" /> <p className='textfooter'>computacaojr@gmail.com</p></div>

            </div>
            <div className='Coluna2'>
              <div id="IconesFooter">
            <a href="https://www.facebook.com/EJComp.UNESP/?epa=SEARCH_BOX" target="_blank" rel="noopener noreferrer" >
              <FontAwesomeIcon icon={faFacebook} size='2x' color='white' className="IconesMidia" />
            </a>
            <a href="https://www.instagram.com/ejcompunesp/" target="_blank" rel="noopener noreferrer" >
              <FontAwesomeIcon icon={faInstagram} size='2x' color='white' className="IconesMidia" />
            </a>
            <a href="https://pt.linkedin.com/company/ejcomp" target="_blank" rel="noopener noreferrer" >
              <FontAwesomeIcon icon={faLinkedin} size='2x' color='white' borderRadius='30px' className="IconesMidia" />
              
            </a>
          </div>

            <p className='TextEj'>Desenvolvido por EJComp - Empresa Júnior da Computação</p>
            </div>
             < div className="Mapa">  
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.1070635404735!2d-51.409717985216595!3d-22.121893285416544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9493f43f0ff7f359%3A0x3ff5d10b95e4acbf!2sUnesp%20-%20Faculdade%20de%20Ci%C3%AAncias%20e%20Tecnologia!5e0!3m2!1spt-BR!2sbr!4v1577716273835!5m2!1spt-BR!2sbr"
            style={{
            border: "0px",
            width: "70%",
            height: "50%",

            marginRight: "0px",
            marginBottom: "10px"            }} allowfullscreen="">

             </iframe>
             </div>
            </div>



        )
    }
}