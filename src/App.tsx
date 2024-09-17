import HeroContainer from './components/HeroContainer'
import Video from './components/Video'

function App() {

  return (
    <>
      <div className='flex flex-col text-red-500'>
        
        <div>
          <HeroContainer className='absolute' />
          <Video videoPath='/public/hero.mp4' />
        </div>

        <div>
          <div className='absolute text-6xl'>
            test test ets es tes tes t est est 
          </div>
          <Video videoPath='/public/hero_2.mp4' />
        </div>

      </div>
    </>
  )
}



export default App
