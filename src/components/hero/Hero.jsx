import React, { useState } from 'react'
import Container from '../container/Container'
import Heading from '../heading/Heading'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Images from '../images/Images';
import BannerImg from '../../assets/slider.png'
import BannerImg1 from '../../assets/slider1.jpg'
import hero from '../../assets/hero.png'
import hero1 from '../../assets/hero1.png'
import { Link } from 'react-router-dom';
import Paragraph from '../paragraph/Paragraph';
import Button from '../button/Button';

const Hero = () => {
    let [dotActive, setDotActive] = useState(0);
    const settings = {
      dots: false,
      beforeChange: (prev, next) => {
        setDotActive(next);
      },
      arrows: false,
      autoplay: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => (
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div
        style={
            i === dotActive 
            ? {
            width: "30px",
            color: "#262626",
            borderRight: "3px #262626 solid",
            padding: '10px 0',
          } 
          : {
            width: "30px",
            color: "#262626",
            borderRight: "3px white solid",
            padding: '10px 0',
            color: "transparent",
          }}
        >
          0{i + 1}
        </div>
      ),
      responsive: [
        {
          breakpoint: 576,
          settings: {
            dots: false,
            appendDots: dots => (
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '2%',
                    transform: 'translateY(-50%)',
                  }}
                >
                  <ul style={{ margin: "0px" }}> {dots} </ul>
                </div>
              ),
              customPaging: i => (
                <div
                style={
                    i === dotActive 
                    ? {
                    width: "30px",
                    color: "#262626",
                    borderRight: "3px #262626 solid",
                    fontSize: '14px',
                  } 
                  : {
                    width: "30px",
                    color: "#262626",
                    borderRight: "3px white solid",
                    color: "transparent",
                    fontSize: '14px',
                  }}
                >
                  0{i + 1}
                </div>
              ),
          }
        },
      ]
    };

  return (
    <section>
        <Container>
          <div className="grid grid-cols-12 gap-5 overflow-hidden h-[70vh]">
            <div className="col-span-8">
              <div>
                <Slider {...settings}>
                  <div >
                    <Link to='#'>
                    <div className='relative'>
                        <Images className='h-full' img={ BannerImg} />
                        <div className='absolute py-32 top-0 left-0 h-full w-[70%]  pl-7'>
                          <Heading className="text-primary text-5xl font-Montserrat" tag='h1' text='Explore Men’s Winter Collection'/>
                          <Paragraph className='text-2xl mr-5 my-5' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. '/>
                          <Button className='rounded-sm' text='SHOP NOW'/>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to='#'>
                      <div className='relative'>
                        <Images className='h-full' img={ BannerImg} />
                        <div className='absolute py-32 top-0 left-0 h-full w-[70%]  pl-7'>
                          <Heading className="text-primary text-5xl font-Montserrat" tag='h1' text='Explore Men’s Winter Collection'/>
                          <Paragraph className='text-2xl mr-5 my-5' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. '/>
                          <Button className='rounded-sm' text='SHOP NOW'/>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className=''>
                    <Link to='#'>
                    <div className='relative'>
                      <Images className='h-full' img={ BannerImg} />
                      <div className='absolute py-32 top-0 left-0 h-full w-[70%]  pl-7'>
                        <Heading className="text-primary text-5xl font-Montserrat" tag='h1' text='Explore Men’s Winter Collection'/>
                        <Paragraph className='text-2xl mr-5 my-5' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. '/>
                        <Button className='rounded-sm' text='SHOP NOW'/>
                      </div>
                    </div>
                    </Link>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-span-4">
              <div className='flex-row'>
              <Link>
                <Images img={hero1}/>
              </Link>
              <Link>
                <Images className='mt-5' img={hero}/>
              </Link>
              </div>
            </div>
          </div>
        </Container>
    </section>
  )
}

export default Hero