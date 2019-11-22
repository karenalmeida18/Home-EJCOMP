import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Components/Home/TelaHome'
import Mej from './Components/Mej/Mej'
import Equipe from './Components/Equipe/Equipe' 

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/mej" component={Mej} />
            <Route exact path="/equipe" component={Equipe} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
    )
}