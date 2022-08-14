import React from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Navigate } from 'react-router-dom'

class Success extends React.Component {
  state = {
    toApp: false
  }

  componentDidMount () {
    axios({
      url: `${apiUrl}/login/success`,
      method: 'GET',
      withCredentials: true
    })
    .then(res => this.props.setUser(res.data.user))
    .then(() => this.setState({ toApp: true }))
  }

  // logout = () => {
  //   axios({
  //     url: `${apiUrl}/logout`,
  //     method: 'POST',
  //     withCredentials: true
  //   })
  //   .then(res => window.open(res.data.url, '_self'))
  // }

  render () {
    if (this.state.toApp) {
      return <Navigate to='/app' />
    }
    return (
      // <div><Button onClick={this.test}>Hello</Button><Button onClick={this.logout}>logout</Button></div>
      <div></div>
    )
  }
}

export default Success