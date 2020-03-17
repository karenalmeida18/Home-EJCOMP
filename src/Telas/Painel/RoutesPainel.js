import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Usuario from './Usuario'
import Login from './Login'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/painel" component={Usuario} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
    )
}