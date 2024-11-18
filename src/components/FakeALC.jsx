import React from 'react'
import '../css/album-comp.css'

import Spinner from './Spinner'


const FakeALC = () => {
  return (
    <div className='album-comp'>

      <div className='ac-head'>
        <h2>Fueled by Creativity and Great tunes</h2>
        <p>Here are some of the albums that keeps me in the zone while coding</p>
      </div>

      <div className='fake-ac-body'>
        <Spinner whatsLoading={'Albums'} status={'Please wait'} />
      </div>

    </div>
  )

}

export default FakeALC