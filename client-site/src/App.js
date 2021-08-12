import React from "react"
import GlobalStyle from "./components/GlobalStyle";
import Navb from './components/Navb';
import { ContactUs } from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetails from "./pages/MovieDetails";
//import pages
import AboutUs from "./pages/AboutUs";
//Router
import {Switch, Route, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion"

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle/>
      <Navb/>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location = {location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs/>
          </Route>
          <Route path="/work" exact>
            <OurWork/>
          </Route>
          <Route path ="/work/:id">
            <MovieDetails/>
          </Route>
          <Route path="/contact">
            <ContactUs/>
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
