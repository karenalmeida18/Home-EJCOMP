import React from 'react'
import Usuario from './Usuario'
import Login from './Login'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from '../../Services/auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute exact path="/painel" component={Usuario} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
    )
}