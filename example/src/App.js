import React from 'react'

import { Button } from 'button-ui'
import 'button-ui/dist/index.css'

const App = () => {
  return (
    <div className='container'>
      <div className='center-content'>
        <Button text='Text Button' type='text' />
        <br />
        <br />
        <Button text='Default Button ' type='default' />
        <br />
        <br />
        <Button text='Dashed Button' type='dashed' />
        <br />
        <br />
        <Button text='Primary Button' type='primary' />
        <br />
        <br />
        <Button text='Link Button' type='link' />
      </div>
    </div>
  )
}

export default App
