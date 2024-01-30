import React from 'react'
import { twMerge } from 'tailwind-merge'

const Paragraph = ({text,className}) => {
  return (
    <p className={twMerge('font-poppins text-base text-text',className)}>{text}</p>
  )
}

export default Paragraph