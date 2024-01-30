import React from 'react'
import Container from '../container/Container'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { IoMdSearch } from "react-icons/io";

const Search = () => {
  return (
    <section>
        <div className='py-8'>
            <Container>
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-2">
                        <Link to='#'>
                            <img src={Logo} alt="img" />
                        </Link>
                    </div>
                    <div className="col-span-6 relative">
                        <input className='w-full py-3 pl-5 bg-[#F6F6F6] ring-2 ring-5 ring-[#F1F1F1]' type="text" />
                        <div className='absolute flex items-center justify-center bottom-1/2 right-0 translate-y-1/2 text-white px-4 h-full text-xl bg-primary'>
                            <IoMdSearch/>
                        </div>
                    </div>
                    <div className="col-span-4"></div>
                </div>
            </Container>
        </div>
    </section>
  )
}

export default Search