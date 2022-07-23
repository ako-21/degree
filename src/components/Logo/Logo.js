import React from 'react'
import DOS from './Dos'

class Logo extends React.Component {
  state = {

  }

  render () {
    return (
      <div className='d-flex' >
        <div className='logo' style={{ fontWeight: 'bold', marginRight: '3px' }}><span style={{ color: 'white' }}>1</span><span style={{ color: 'white' }}>DOS</span>
        </div>
        <DOS></DOS>
      </div>
    )
  }
}

export default Logo