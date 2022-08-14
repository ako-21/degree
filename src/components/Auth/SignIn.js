import React from 'react'
import apiUrl from '../../apiConfig'
import Logo from '../Logo/Logo'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import bgImage from '../../images/background-image-two.jpg'
import 'font-awesome/css/font-awesome.min.css'

class SignIn extends React.Component {
  state = {}

  toFBAuth = () => {
    window.open(apiUrl + '/auth/facebook/', '_self')
  }

  render () {
    return (
      <div style={{ height: '100vh' }} className='main-font-style'>
        <div style={{ backgroundImage: `url(${bgImage})`, width: '100%', height: '100vh', backgroundPositionX: 'right', backgroundSize: 'cover', maxWidth: '991px', position: 'absolute', zIndex: '-1' }}></div>
        <div style={{ height: '100vh', width: '100%', maxWidth: '991px', position: 'absolute', backgroundColor: '#222222a6', zIndex: '-1' }}></div>
        <Container style={{ height: '100%' }} className='d-flex justify-content-center align-items-end'>
          <div style={{ position: 'absolute' }}>
            <div className='d-flex justify-content-center' style={{ width: '100%' }}>
              <Logo />
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <p style={{ textAlign: 'center', color: 'white' }}>By Signing Up, you agree with our <span style={{ textDecoration: 'underline' }}>Terms of</span><br></br>Service and Privacy Policy</p>
            </div>
            <div className='d-flex justify-content-center' style={{ width: '100%', marginBottom: '1rem' }}>
              <Button style={{ color: 'white', width: '100%' }} variant='google'><i className="fa fa-google-plus" style={{ paddingRight: '12px' }}></i>SIGN IN WITH GOOGLE</Button>
            </div>
            <div className='d-flex justify-content-center' style={{ width: '100%', marginBottom: '1rem' }}>
              <Button onClick={this.toFBAuth} style={{ width: '100%' }} variant='facebook'><i style={{ paddingRight: '12px' }} className='fa fa-facebook' aria-hidden='true'></i>SIGN IN WITH FACEBOOK</Button>
            </div>
            <div>
              <p style={{ textAlign: 'center', color: 'white' }}>Want to learn more about 1DOS? <span style={{ textDecoration: 'underline' }}> Click Here</span></p>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

export default SignIn