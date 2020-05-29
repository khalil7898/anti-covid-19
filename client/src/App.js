import React from "react";
import Map from "./components/Map";

import Menu from"./pages/Admin/Commun/menu"
import Header from "./pages/Admin/Commun/header"

import Login from "./pages/Admin/signin/login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ListeHopital from "./pages/Admin/Hopital/Liste/Lister"
import Register from './pages/Admin/register/register';
import ListeCentre from "./pages/Admin/CentreConfinement/Liste/Lister"
import StatsHopitalHome from "./pages/Admin/Hopital/Stats/statsHopitalHome"
import FormAjoutHopital from "./pages/Admin/Hopital/Ajout/formAjoutHopital"
import FormAjoutCentre from "./pages/Admin/CentreConfinement/Ajout/formAjoutCentre"
 import Home from "./components/Home";

 const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={( props) => (
    localStorage.getItem('token')
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  )} />
)



function HomePage()
{
  return(
    <div>
      <Map/>
      <Home/>
    </div>
  )
}



function App() {
  return (
    <div className="App">

      <Router>
     <Switch>
     <Route path="/" exact component={HomePage}/>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <PrivateRoute path="/listeHopital" exact component={ListeHopital} />
      <PrivateRoute path="/statsHopital" exact component={StatsHopitalHome} />
      <PrivateRoute path="/ajoutHopital" exact component={FormAjoutHopital}/>
      <PrivateRoute path="/ajoutCentre" exact component={FormAjoutCentre}/>
      <PrivateRoute path="/listeCentre" exact component={ListeCentre} />
      </Switch>

      
    </Router>

    </div>
  );
}

export default App;
