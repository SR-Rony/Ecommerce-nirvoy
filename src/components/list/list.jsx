import React from 'react'

const list = ({children,className}) => {
  return (
    <ul className={className}>{children}</ul>
  )
}

export default list