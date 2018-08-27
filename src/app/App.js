import React, {Component} from 'react'
import {Row, Col} from 'reactstrap'
import {connect} from 'react-redux'
import firebase from 'firebase'
import {Helmet} from 'react-helmet'

import Header from 'Components/Header'
import Footer from 'Components/Footer'

import {auth} from 'Reducers/Auth'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isSignedIn: false,
      collapsed: false
    }
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  componentWillMount() {
	    firebase.auth().onAuthStateChanged(user => {
	    	this.setState({ isSignedIn: !!user })
	    	this.props.auth(user)
    })
  }

  head() {
    return (
      <Helmet key="app">
        <title>App</title>
        <meta property="og:title" content="App" />
      </Helmet>
    )
  }

  toggleNavbar() {
    this.setState({ collapsed: !this.state.collapsed })
  }

  onSignOut() {
    firebase.auth().signOut()
  }

  render() {
    return [
      this.head(),
      <header key="header_tag">
        <Header 
          {...this.props} 
          collapsed={this.state.collapsed}
          handleToggleNavbar={this.toggleNavbar}
          isSignedIn={this.state.isSignedIn} 
          handleSignOut={this.onSignOut}
        />
      </header>,
      <main role="main" className="container-fluid" key="main_tag">
        <div id="app">
          <Row>
            <Col md={12}>{this.props.children}</Col>
          </Row>
        </div>
      </main>,
      <Footer key="footer" />
    ]
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.get('Auth').toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    auth: (userObj) => dispatch(auth(userObj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
