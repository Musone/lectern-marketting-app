import { ReactNode } from "react"

interface ContainerProps {
    children: ReactNode,
    className?: string,
}

const Container = ({ children, className } : ContainerProps) => {
  return (
    <div className={`${className} flex flex-col`}>
        {children}
    </div>
  )
}

export default Container