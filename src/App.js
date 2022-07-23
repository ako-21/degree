import React, { Component, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import ReactDefault from './components/ReactDefault'
import SignUp from './components/Auth/SignUp/SignUp'


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <Fragment>
        <div style={{ maxWidth: '991px', height: '100vh', margin: '0 auto' }}>
          <Routes>
            <Route exact path='/' />
            <Route exact path='/sign-up' element={<SignUp />} />
            <Route exact path='/sign-in' />
            <Route path='/default' element={<ReactDefault />} />
            <Route path='*' element={(<div>nothing</div>)} />
          </Routes>
        </div>
      </Fragment>
    )
  }
}

export default App
