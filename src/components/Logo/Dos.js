import React from 'react'
import dos from '../../images/1dos.png'

class DOS extends React.Component {
  state = {}

  render () {
    return (
      <div className='dos-img-div'>
        <img src={dos} className='dos-img' alt='' />
      </div>  
    )
  }
}

export default DOS