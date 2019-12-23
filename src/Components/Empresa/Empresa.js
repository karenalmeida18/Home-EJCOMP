import React from 'react'
import {Button} from 'semantic-ui-react'
import './Empresa.css'

const Empresa = () => (
    <div className="empresa">
        <div className="bg-image"></div>
            <div className="content">
            <h2>A EMPRESA</h2>
            <div className="text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non felis libero. Aenean sed nisi sit amet neque scelerisque elementum. Sed suscipit auctor quam quis sagittis.</p>
            </div>
            <Button primary>ENTRE EM CONTATO</Button>
            
        </div>
    </div>
    
);

export default Empresa;