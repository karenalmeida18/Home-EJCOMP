import React, {Component} from 'react';
import Usuario from './Usuario';
import './PortfolioPainel.css';

export default class PortfolioPainel extends Component {
    render(){
        return (
            <>
            <div>
                <Usuario/>
                <div className='PortfolioPainel'>
                    <div className='PortfolioPost1'>
                    
                    </div>
                </div>
            </div>
            </>
        )
    }
}