import { useState } from 'react'
import sample from './assets/hero.mp4'

function App() {
  const [count, setCount] = useState(0)

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
