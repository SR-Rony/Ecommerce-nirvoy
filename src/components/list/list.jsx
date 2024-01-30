import React from 'react'

const List = ({children,className,key}) => {
  return (
    <ul key={key} className={className}>{children}</ul>
  )
}

export default List