import OurStory from '@/sections/OurStory'
import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
  return (
    <>
    <div className='text-white bg-darkgray min-h-screen flex flex-col items-center text-center gap-8 px-6 py-8 md:px-12 lg:px-20 pt-[10rem] relative'>
          <p className='text-md md:text-lg '>
          About</p>
                <h1 className='text-4xl md:text-5xl lg:text-6xl leading-tight max-w-[800px]'>
          We love to make great things, things that matter.
        </h1>
          <p className='text-md md:text-lg  max-w-[800px]'>
          Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>
      </div>
      <div className='grid grid-cols-3 absolute top-[80%] left-[15%]'>
        <Image
          src="/assets/Images/Rectangle 1270 (2).png"
          alt='man'
          width={ 300}
          height={303}
        />
        <Image
          src="/assets/Images/Rectangle 1270 (3).png"
          alt='man'
          width={ 300}
          height={303}
        />
        <Image
          src="/assets/Images/Rectangle 1270.png"
          alt='man'
          width={ 300}
          height={303}
          className='grid grid-rows-2'
        />
        <Image
          src="/assets/Images/Rectangle 1273.png"
          alt='man'
          width={ 300}
          height={303}
        />
        <Image
          src="/assets/Images/Rectangle 1274.png"
          alt='man'
          width={ 300}
          height={303}
        />
      </div>
      <OurStory/>
    </>
  )
}

export default AboutPage
