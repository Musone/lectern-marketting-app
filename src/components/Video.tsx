
interface VideoProps {
  videoPath: string
}

const Video = ({ videoPath }: VideoProps) => {
  return (
    <video className='cl' autoPlay loop muted>
      <source src={videoPath} type='video/mp4' />
    </video>
  )
}

export default Video