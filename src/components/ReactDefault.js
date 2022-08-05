import React from 'react'
import axios from 'axios'
import apiUrl from '../apiConfig'
import logo from '../logo.svg'
import './../App.css'
import Button from 'react-bootstrap/Button'

class ReactDefault extends React.Component {
  state = {

  }

  test = () => {
    axios({
      url: `${apiUrl}/test`,
      method: 'GET'
    })
    .then(res => console.log(res))
  }

  render () {
    return (
      <div className="App">
        <Button onClick={this.test}>Click</Button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default ReactDefault
