import React from 'react'
import { twMerge } from 'tailwind-merge'

const Heading = (props,{className,text}) => {
  return (
    <h2 className={twMerge("font-Montserrat font-bold",className)}>{text}</h2>
  )
}

export default Heading