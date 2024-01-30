import React from 'react'
import { twMerge } from 'tailwind-merge'

const listItem = ({className,text}) => {
  return (
    <div className={twMerge('font-poppins text-base font-normal',className)}>{text}</div>
  )
}

export default listItem