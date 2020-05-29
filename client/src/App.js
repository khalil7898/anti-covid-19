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
<<<<<<< HEAD
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
=======
import Hospitals from'./components/Hospitals';
import Confinement from "./components/Confinement";
import Home from "./components/Home";
import Detaille from "./components/Detaille.";


>>>>>>> dbb937c83b1c08775c89d93dad8d42c608a7ec29



function App() {
  return (
    <div className="App">

      <Router>
     <Switch>
<<<<<<< HEAD
     <Route path="/" exact component={HomePage}/>
=======
      <Route path="/Hospitalinfo" exact component={Hospitals} />
      <Route path="/Confinementinfo" exact component={Confinement} />
>>>>>>> dbb937c83b1c08775c89d93dad8d42c608a7ec29
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
<<<<<<< HEAD
      <PrivateRoute path="/listeHopital" exact component={ListeHopital} />
      <PrivateRoute path="/statsHopital" exact component={StatsHopitalHome} />
      <PrivateRoute path="/ajoutHopital" exact component={FormAjoutHopital}/>
      <PrivateRoute path="/ajoutCentre" exact component={FormAjoutCentre}/>
      <PrivateRoute path="/listeCentre" exact component={ListeCentre} />
=======
      <Route path="/statsHopital" exact component={StatsHopitalHome} />
      <Route path="/ajoutHopital" exact component={FormAjoutHopital}/>
      <Route path="/" exact component={Home}/>
      <Route path="/Home" exact component={Home}/>
      <Route path="/detailleinfo" exact component={Detaille}/>
      
>>>>>>> dbb937c83b1c08775c89d93dad8d42c608a7ec29
      </Switch>

      
    </Router>

    </div>
  );
}

export default App;
