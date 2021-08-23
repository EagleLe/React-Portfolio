import './App.css';

//import bootstrap 
import "bootstrap/dist/css/bootstrap.min.css";

//import all the components 

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

import { About } from './components/About';

import { Projects } from './components/Projects';

import { Contact } from './components/Contact';

//import routing module to navigate to different pages
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App() {
    return ( 
        <>
        <Navbar/>
         <Switch>
                <Route path="/" component={Header} exact />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
            </Switch>
            <Footer/>
        
        </>
    );
}

export default App;