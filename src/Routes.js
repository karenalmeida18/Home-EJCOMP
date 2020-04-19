import React from 'react'
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Principal from './Components/Principal/Principal'
import Equipe from './Components/Equipe/Equipe' 
import Blog from './Components/Blog/Blog'
import Portfolio from './Components/Portfolio/index'
import Usuario from './Telas/Painel/Usuario'
import Login from './Telas/Painel/Login'
import { isAuthenticated } from './Services/auth'


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
            <Route exact path="/" component={Principal} />
            <Route exact path="/equipe" component={Equipe} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/admin" component={Login} />
            <PrivateRoute exact path="/painel" component={Usuario} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
    )
}