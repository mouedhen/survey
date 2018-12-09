import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends Component {

  renderContent () {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return <li><a href="/auth/google">Login</a></li>
      default:
        return (
          <div>
            <li><Link to="/surveys/new">Survey New</Link></li>
            <li><a href="/auth/logout">Logout</a></li>
          </div>
        )
    }
  }

  render () {
    return (
      <nav>
        <div>
          <div className="nav-wrapper">
            <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo"
                  style={{ marginLeft: 16 }}>Survey</Link>
            <ul id="nav-mobile" className="right" style={{ marginRight: 16 }}>
              {this.renderContent()}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

function mapStateToProps ({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)
