import React from 'react'
import { twMerge } from 'tailwind-merge'

const Button = ({className,text}) => {
  return (
    <button className={twMerge("text-white font-poppins font-bold bg-primary py-3 px-6 ring ring-primary hover:bg-transparent hover:text-primary ",className)}>{text}</button>
  )
}

export default Button