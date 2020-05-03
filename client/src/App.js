import React from "react";
import Map from "./components/Map";
import Menu from"./pages/Admin/Commun/menu"
import Header from "./pages/Admin/Commun/header"
import Footer  from "./pages/Admin/Commun/footer"
import Login from "./pages/Admin/signin/login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ListeHopital from "./pages/Admin/Hopital/Liste/Lister"
import Register from './pages/Admin/register/register';
import StatsHopitalHome from "./pages/Admin/Hopital/Stats/statsHopitalHome"
import FormAjoutHopital from "./pages/Admin/Hopital/Ajout/formAjoutHopital"
import Map from "./components/Map";
 import Home from "./components/Home";

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
      <Route path="/login" exact component={Login} />
      <Route path="/listeHopital" exact component={ListeHopital} />
      <Route path="/register" exact component={Register} />
      <Route path="/statsHopital" exact component={StatsHopitalHome} />
      <Route path="/ajoutHopital" exact component={FormAjoutHopital}/>
      <Route path="/" exact component={HomePage}/>
      </Switch>

      
    </Router>
    </div>
  );
}

export default App;
