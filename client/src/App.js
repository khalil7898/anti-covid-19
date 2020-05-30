import React from "react";

import Login from "./pages/Admin/signin/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListeHopital from "./pages/Admin/Hopital/Liste/Lister";
import Register from "./pages/Admin/register/register";
import ListeCentre from "./pages/Admin/CentreConfinement/Liste/Lister";
import StatsHopitalHome from "./pages/Admin/Hopital/Stats/statsHopitalHome";
import FormAjoutHopital from "./pages/Admin/Hopital/Ajout/formAjoutHopital";
import FormAjoutCentre from "./pages/Admin/CentreConfinement/Ajout/formAjoutCentre";

import Hospitals from "./components/Hospitals";
import Confinement from "./components/Confinement";
import Home from "./components/Home";
import Detaille from "./components/Detaille.";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Home" exact component={Home} />
          <Route path="/Hospitalinfo" exact component={Hospitals} />
          <Route path="/Confinementinfo" exact component={Confinement} />
          <Route path="/detailleinfo" exact component={Detaille} />

          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/listeHopital" exact component={ListeHopital} />
          <Route path="/statsHopital" exact component={StatsHopitalHome} />
          <Route path="/ajoutHopital" exact component={FormAjoutHopital} />
          <Route path="/ajoutCentre" exact component={FormAjoutCentre} />
          <Route path="/listeCentre" exact component={ListeCentre} />
          <Route path="/statsHopital" exact component={StatsHopitalHome} />
          <Route path="/ajoutHopital" exact component={FormAjoutHopital} />
          <Route path="/" component={notFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

function notFoundPage() {
  return (
    <React.Fragment>
      <h1 style={{ marginTop: 200, marginLeft:300 }}>Oops Page not found..</h1>
    </React.Fragment>
  );
}
