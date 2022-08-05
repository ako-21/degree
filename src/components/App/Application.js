import React from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import apiUrl from '../../apiConfig'
class Application extends React.Component {
  state = {}

  test = () => {
    axios({
      url: `${apiUrl}/login/success`,
      method: 'GET',
      withCredentials: true
    })
    .then(res => console.log(res))
  }

  render () {
    return (
      <div><Button onClick={this.test}>Hello</Button>Hello</div>
    )
  }
}

export default Application