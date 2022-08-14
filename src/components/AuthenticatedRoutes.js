import React from 'react'
import { Navigate } from 'react-router-dom'

class AuthenticatedRoute extends React.Component {
  state = {

  }



  render () {
    if (!this.props.user) {
      return <Navigate to='/' />
    }
    return (
      <React.Fragment>
        {this.props.children && this.props.user &&
          this.props.children
        }
      </React.Fragment>
    )
  }
}

export default AuthenticatedRoute
