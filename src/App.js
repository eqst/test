import React,{Component} from 'react'
import {Router,Switch} from "react-router-dom"
import Login from "./containers/login"
import Admin from "./containers/admin"
export default class App extends Component{
  render(){
    return (
      <div>
        <Switch>
          <Router>
            <Login path = '/login' component = {Login}/>
            <Admin path = '/admin' component = {Admin}/>
          </Router>
        </Switch>
      </div>
    )
  }
}