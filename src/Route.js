import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Components/About';
import Home from './Components/Home';
import Product from './Components/Product';
import Productitems from './Components/Productitems';
import Navbar from './Components/Navbar';

function RouteConfig(){
    return(
        <div>
            <Router>
                <Navbar></Navbar>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route exact path="/product" component={Product}/>
                    <Route path="/product/:id" component={Productitems}/>
    <Route Route path="*" component={()=><h2>404 Not Found</h2>}/>
                </Switch>
            </Router>

        </div>
    );
}

export default RouteConfig;