import React from "react";
import { BrowserRouter as Hashrouter, Route, Switch } from "react-router-dom";

// PAGE IMPORTS
import Dashboard from "./pages/Dashboard"

// import AboutMe from "./pages/AboutMe";
// import Portfolio from "./pages/Portfolio";
// import Splash from "./pages/Splash";
// import NoMatch from "./pages/NoMatch";
// import Navigation from "./components/Nav";
// import Contact from "./pages/Contact"
// import Photography from "./pages/Photography"


function App() {
  return (
    
    <Hashrouter>
      <Route exact path = {"/"} component={Dashboard}>
      </Route>
    </Hashrouter>
    
  );
}

export default App;
