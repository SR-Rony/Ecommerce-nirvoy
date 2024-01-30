import React, { useState } from 'react'
import Container from '../container/Container'
import List from '../list/list'
import ListItem from '../list/listItem'

let menuList =["Women's Fashion","men's Fashion","Kid's Fashion","Home & Lifestyle","Arts & Crafts","Computer & Electronics","Food & Grocery"]

const Navbar = () => {
    const [menu,serMenu]=useState(menuList)
  return (
    <nav className='pb-2 border-b-2 border-[#EFEEEE]'>
        <Container>
            <List className='flex justify-between items-center gap-5 px-10 uppercase'>
                {menu.map((item,index)=>(
                    <div key={index}>
                        <ListItem oncl className='relative  hover:after:absolute after:w-48 after:h-1 after:bg-transparent hover:after:bg-primary after:bottom-[-10px] after:right-1/2 after:translate-x-1/2 cursor-pointer ' text={item}/>
                    </div>
                ))}
            </List>
        </Container>
    </nav>
  )
}

export default Navbar