import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { Storage, Laptop, Smartphone } from '@material-ui/icons';
import "./styles.css";
const Card = () => (
    <div className="services">
        <p style={{marginBottom: '10px'}}>O QUE FAZEMOS?</p>
        <div className="line">
            
        </div>
        <div className="cardsproj">
            <IconButton>
                <Laptop style={{fontSize: '150px', color: '#12264A'}}/>
            </IconButton>
        </div>
        <div className="cardsproj">
            <IconButton>
                <Smartphone style={{fontSize: '150px',  color: '#12264A'}}/>
            </IconButton>
        </div>
        <div className="cardsproj">
            <IconButton>
                <Storage style={{fontSize: '150px', color: '#12264A'}}/>
            </IconButton> 
        </div>
    </div>
);

export default Card;