import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Home from  "./Components/Home";
import Header from './Components/Header';
import SideBar from './Components/SideBar'
import Location from './Components/Location'
import Description from './Components/Description'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component
{
  render()
  {
    return (
      <Router>
        <Header/>
        <SideBar/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/location" component={Location}></Route>
          <Route  path="/location/:id" component={Description}></Route>
        </Switch>
      </Router>
    )
  }
}
export default App
