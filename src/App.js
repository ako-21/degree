import React, { Component, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import ReactDefault from './components/ReactDefault'


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <Fragment>
        <Routes>
          <Route exact path='/' element={<ReactDefault />} />
          <Route path='*' element={(<div>nothing</div>)} />
        </Routes>
      </Fragment>
    )
  }
}

export default App
