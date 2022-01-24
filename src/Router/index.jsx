import React from "react";
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom"

import Home from "../pages/Home";
import User from "../pages/User";
import LifeServe from "../pages/LifeServe";
import Shop from "../pages/Shop";
import Layout from "./Layout";
import City from "../pages/City";
import Search from "../pages/Search";
import Detail from "../pages/Detail";

import FootBar from "../components/FootBar";
import Login from "../pages/Login"
function MyRouter(params) {
  return(
    
    <Router>
        <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/city" component={City}></Route>
        <Route path="/detail/:id" component={Detail}></Route>
        <Route path="/search/:keyword" component={Search}></Route>
        <Layout>
          
          <FootBar currentCity={"广州"}></FootBar>
          <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/home/" component={Home}></Route>
          <Route path="/user" component={User}></Route>
          <Route path="/life" component={LifeServe}></Route>
          <Route path="/shop" component={Shop}></Route>
          
        </Switch>
        </Layout>
        </Switch>
    </Router>
  
  )
}

export default MyRouter