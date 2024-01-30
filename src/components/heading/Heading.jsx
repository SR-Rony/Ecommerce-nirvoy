import React from 'react'
import { twMerge } from 'tailwind-merge'

const Heading = (props) => {
  let{text,className}=props
  return (
    <props.tag className={twMerge("font-Montserrat font-bold",className)}>{text}</props.tag>
  )
}

export default Heading