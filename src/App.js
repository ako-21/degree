import React, { Component, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthenticatedRoute from './components/AuthenticatedRoutes'
import ReactDefault from './components/ReactDefault'
import SignIn from './components/Auth/SignIn'
import Success from './components/Auth/Success'
import Application from './components/App/Application'
import PrivacyPolicy from './components/PrivacyPolicy'


class App extends Component {
  state = {
    user: null
  }

  UNSAFE_componentWillMount () {
    if (JSON.parse(localStorage.getItem('user'))) {
      this.setState({ user: JSON.parse(localStorage.getItem('user'))})
    } else {
      return
    }
  }

  setUser = (user) => {
    this.setState({ user })
    localStorage.setItem('user', JSON.stringify(user))
  }

  clearUser = () => this.setState({ user: null })

  render () {
    return (
      <Fragment>
        <div style={{ maxWidth: '991px', height: '100vh', margin: '0 auto' }}>
          <Routes>
            <Route exact path='/' element={<SignIn />} />
            <Route
              exact path='/app'
              element={
                <AuthenticatedRoute user={this.state.user}>
                  <Application user={this.state.user} />
                </AuthenticatedRoute>
              }
            />
            <Route exact path='/success' element={<Success setUser={this.setUser} />} />
            <Route path='/default' element={<ReactDefault />} />
            <Route path='/privacy' elemnet={<PrivacyPolicy />} />
            <Route path='*' element={(<div>nothing</div>)} />
          </Routes>
        </div>
      </Fragment>
    )
  }
}

export default App
