import React from 'react'
import Container from '../container/Container'
import Heading from '../heading/Heading'
import Paragraph from '../paragraph/Paragraph';
import { FaAngleRight } from "react-icons/fa";
import { RiPantoneLine } from "react-icons/ri";

const Category = () => {
  return (
    <section className='mt-20'>
        <Container>
            <Heading tag='h3' text='Category'/>
            <div className='flex gap-5 justify-between items-center mt-5 px-5'>
                <div className='flex px-5 py-2 shadow-lg items-center gap-4 cursor-pointer'>
                    <RiPantoneLine/>
                    <Paragraph text='Health & Household' />
                    <FaAngleRight/>
                </div>
                <div className='flex p-2 shadow-lg items-center gap-2 cursor-pointer'>
                    <RiPantoneLine/>
                    <Paragraph text='Health & Household' />
                    <FaAngleRight/>
                </div>
                <div className='flex p-2 shadow-lg items-center gap-2 cursor-pointer'>
                    <RiPantoneLine/>
                    <Paragraph text='Health & Household' />
                    <FaAngleRight/>
                </div>
                <div className='flex p-2 shadow-lg items-center gap-2 cursor-pointer'>
                    <RiPantoneLine/>
                    <Paragraph text='Health & Household' />
                    <FaAngleRight/>
                </div>
                <div className='flex p-2 shadow-lg items-center gap-2 cursor-pointer'>
                    <RiPantoneLine/>
                    <Paragraph text='Health & Household' />
                    <FaAngleRight/>
                </div>
            </div>
            <div className='flex gap-5 justify-between items-center mt-5 px-5'>
                <div className='flex px-5 py-2 shadow-lg items-center gap-4 cursor-pointer'>
                    <RiPantoneLine/>
                    <Paragraph text='Health & Household' />
                    <FaAngleRight/>
                </div>
                <div className='flex p-2 shadow-lg items-center gap-2 cursor-pointer'>
                    <RiPantoneLine/>
                    <Paragraph text='Health & Household' />
                    <FaAngleRight/>
                </div>
                <div className='flex p-2 shadow-lg items-center gap-2 cursor-pointer'>
                    <RiPantoneLine/>
                    <Paragraph text='Health & Household' />
                    <FaAngleRight/>
                </div>
                <div className='flex p-2 shadow-lg items-center gap-2 cursor-pointer'>
                    <RiPantoneLine/>
                    <Paragraph text='Health & Household' />
                    <FaAngleRight/>
                </div>
                <div className='flex p-2 shadow-lg items-center gap-2 cursor-pointer'>
                    <RiPantoneLine/>
                    <Paragraph text='Health & Household' />
                    <FaAngleRight/>
                </div>
            </div>
            <div className='flex gap-5 justify-between items-center mt-5 px-5'>
                <div className='flex px-5 py-2 shadow-lg items-center gap-4 cursor-pointer'>
                    <RiPantoneLine/>
                    <Paragraph text='Health & Household' />
                    <FaAngleRight/>
                </div>
                <div className='flex p-2 shadow-lg items-center gap-2 cursor-pointer'>
                    <RiPantoneLine/>
                    <Paragraph text='Health & Household' />
                    <FaAngleRight/>
                </div>
                <div className='flex p-2 shadow-lg items-center gap-2 cursor-pointer'>
                    <RiPantoneLine/>
                    <Paragraph text='Health & Household' />
                    <FaAngleRight/>
                </div>
                <div className='flex p-2 shadow-lg items-center gap-2 cursor-pointer'>
                    <RiPantoneLine/>
                    <Paragraph text='Health & Household' />
                    <FaAngleRight/>
                </div>
                <div className='flex p-2 shadow-lg items-center gap-2 cursor-pointer'>
                    <RiPantoneLine/>
                    <Paragraph text='Health & Household' />
                    <FaAngleRight/>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Category