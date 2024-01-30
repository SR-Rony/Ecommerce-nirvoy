import React from 'react'
import { twMerge } from 'tailwind-merge'

const Images = ({img,className}) => {
  return (
    <img className={twMerge('w-full object-cover',className)} src={img} alt="img" />
  )
}

export default Images