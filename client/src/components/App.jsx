import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from '../actions'

import Header from './Header'
import Landing from './Landing'

const Dashboard = () => { return <h1>Dashboard</h1> }
const SurveyNew = () => { return <h1>SurveyNew</h1> }

class App extends Component {

  componentDidMount () {
    this.props.fetchCurrentUser()
  }

  render () {
    return (
      <div className="app">
        <Router>
          <div>
            <Header/>
            <Route path="/" exact component={Landing}/>
            <Route path="/surveys" exact component={Dashboard}/>
            <Route path="/surveys/new" exact component={SurveyNew}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default connect(null, actions)(App)
