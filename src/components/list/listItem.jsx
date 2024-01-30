import React from 'react'
import { twMerge } from 'tailwind-merge'

const ListItem = ({className,text,key}) => {
  return (
    <li className={twMerge('font-poppins text-base font-normal',className)}>{text}</li>
  )
}

export default ListItem