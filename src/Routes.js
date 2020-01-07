import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Principal from './Components/Principal/Principal'
import Equipe from './Components/Equipe/Equipe' 
import Blog from './Components/Blog/Blog'
import Portfolio from './Components/Portfolio/index'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
            <Route exact path="/" component={Principal} />
            <Route exact path="/equipe" component={Equipe} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/blog" component={Blog} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
    )
}