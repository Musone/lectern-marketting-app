import sample from './assets/hero.mp4'

const Video = () => {
  return (
    <video className='cl' autoPlay loop muted>
        <source src={sample} type='video/mp4' />
    </video>
  )
}

export default Video