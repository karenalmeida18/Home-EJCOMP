import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Components/Home/TelaHome'
import Mej from './Components/Mej/Mej'
import Equipe from './Components/Equipe/Equipe' 
import Serviços from './Components/Cards/index'
import Empresa from './Components/Empresa/Empresa'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/mej" component={Mej} />
            <Route exact path="/empresa" component={Empresa} />
            <Route exact path="/equipe" component={Equipe} />
            <Route exact path="/serviços" component={Serviços} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
    )
}