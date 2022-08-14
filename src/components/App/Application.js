import React from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import apiUrl from '../../apiConfig'

class Application extends React.Component {
  state = {
  }

  test = () => {
    axios({
      url: `${apiUrl}/login/success`,
      method: 'GET',
      withCredentials: true
    })
    .then(res => console.log(res))
  }

  logout = () => {
    axios({
      url: `${apiUrl}/logout`,
      method: 'POST',
      withCredentials: true
    })
    .then(res => window.open(res.data.url, '_self'))
  }

  render () {
    return (
      <div><Button onClick={this.test}>Hello</Button><Button onClick={this.logout}>logout</Button></div>
    )
  }
}

export default Application