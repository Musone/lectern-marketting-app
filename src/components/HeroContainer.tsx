import { ReactNode } from "react"

interface ContainerProps {
  className: string
}

const HeroContainer = ({className} : ContainerProps) => {
  return (
    <div className='flex justify-center'>
      <div className={`${className} flex flex-col w-[75%] opacity-[50%] bg-red-300 h-full`}>
          HERO CONTAINER
      </div>
    </div>
  )
}

export default HeroContainer