import React from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Avatar from '@mui/material/Avatar'

class Application extends React.Component {
  state = {
    offCanvas: false,
    mounted: false
  }

  // selectorRef = React.createRef()

  componentDidMount () {
    window.addEventListener("resize", this.calcOffcanvasPos)
    this.setState({ mounted: true })
  }

  logout = () => {
    axios({
      url: `${apiUrl}/logout`,
      method: 'POST',
      withCredentials: true
    })
    .then(res => window.open(res.data.url, '_self'))
    .then(localStorage.removeItem('user'))
  }

   handleClose = () => {
    this.setState({ offCanvas: false })
   }

   calcOffcanvasPos = () => {
    const browser = window.innerWidth
    // const element = this.selectorRef.current.clientWidth
    let box = document.querySelector('.main-app');
    let element = box.offsetWidth;
    const subtract = browser - element
    const divide = subtract / 2
    return divide + 10
   }

  render () {
    return (
      <Container ref={this.selectorRef} className='main-app' style={{ paddingTop: '1rem', height: '100%' }}>
        <div className='d-flex' onClick={() => this.setState({ offCanvas: true })}>
          <Avatar sx={{ width: 50, height: 50 }} src={this.props.user.photos[0].value} alt='profile-pic' />
          <div className='d-flex align-items-center secondary-font-style' style={{ marginLeft: '10px', fontWeight: 'bold' }}>
            {this.props.user.name.givenName}
          </div>
        </div>
        {/* <Button onClick={() => console.log(JSON.parse(localStorage.getItem('user')))}>localstore</Button> */}
        {/* <Button onClick={this.logout}>logout</Button> */}
        {/* <Button onClick={() => console.log(window.innerWidth)}>width</Button> */}
        <React.Fragment>
          {this.state.mounted &&
          <Offcanvas backdrop={false} style={{ left: `${this.calcOffcanvasPos()}px` }} show={this.state.offCanvas} onHide={this.handleClose}>
            <Offcanvas.Header closeButton>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Row>
                <Button onClick={this.logout} className='auth-button secondary-font-style'>Log Out</Button>
              </Row>
            </Offcanvas.Body>
          </Offcanvas>
          }
        </React.Fragment>
      </Container>
    )
  }
}

export default Application