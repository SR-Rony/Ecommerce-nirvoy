import React, { useState } from 'react'
import Container from '../container/Container'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { IoMdSearch } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { FaRegUser,FaRegHeart  } from "react-icons/fa";
import Paragraph from '../paragraph/Paragraph';

const Search = () => {
    // const [input,setInput] =useState('')


  return (
    <section>
        <div className='py-8'>
            <Container>
                <div className="grid grid-cols-12  gap-5 justify-between items-center">
                    <div className="col-span-6 sm:col-span-2 order-1">
                        <Link to='#'>
                            <img src={Logo} alt="img" />
                        </Link>
                    </div>
                    <div className="col-span-12 sm:col-span-6 order-3 sm:order-2 mt-5 sm:mt-0">
                        <div className='relative w-full rounded-md overflow-hidden ring-5 ring-[#F1F1F1]'>
                        <input  className='w-full py-3 pl-5 bg-[#F6F6F6]' type="text" placeholder="I'm looking for..." />
                        <div className='absolute flex items-center justify-center cursor-pointer bottom-1/2 right-0 translate-y-1/2 text-white px-4 h-full text-xl bg-primary'>
                            <IoMdSearch />
                        </div>
                        </div>
                    </div>
                    <div className="col-span-6 sm:col-span-4  order-2 sm:order-3">
                        <div className="flex gap-x-5 md:gap-x-10 justify-end items-center">
                            <div className='flex items-center gap-2'><FaRegUser className='text-xl sm:text-base'/><Paragraph className='hidden lg:flex' text='login'/></div>
                            <div className='flex items-center gap-2'><FaRegHeart className='text-xl sm:text-base' /><Paragraph className='hidden lg:flex' text='Wishlist'/></div>
                            <div className='flex items-center gap-2'><BsCart className='text-xl sm:text-base'/><Paragraph className='hidden lg:flex' text='My cart'/> <span className='w-5 h-5 bg-red-500 rounded-full text-white text-center flex justify-center items-center '>1</span></div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </section>
  )
}

export default Search