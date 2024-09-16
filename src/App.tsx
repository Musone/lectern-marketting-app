import { useState } from 'react'

function App() {

  return (
    <>
      <div className=''>
      <video className='videoTag' autoPlay loop muted>
          <source src={sample} type='video/mp4' />
        </video>
      </div>
    </>
  )
}



export default App
