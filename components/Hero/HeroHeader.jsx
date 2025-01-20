import Image from 'next/image'
import React from 'react'

import header from '../../assets/ladies_header.jpg'
import headerKana from '../../assets/ladies_kanan.jpg'
import Link from 'next/link'

const HeroHeader = () => {
  return (
    <>
      <div className=''>
        <Link href={"/"}>
        <Image src={header} className='w-full h-screen object-cover absolute' alt='header' />
        </Link>
        <div className='grid justify-center gap-5 md:grid-cols-2 '>
        <p className='relative top-[750px] ml-10 text-white text-2xl md:text-4xl uppercase font-semibold'>happy lunar new year</p>
        <p className='relative top-[750px] left-28 md:left-[800px] text-black  bg-white p-1 w-fit uppercase font-semibold'>buy now</p>
        </div>
      </div>
      <div className='grid grid-rows-1 md:grid-cols-2 w-full relative top-[800px]'>
        <div className='h-full w-full '>
          <video src="https://acc-media-assets.s3.ap-southeast-1.amazonaws.com/hm_id/vmd/24/NS/12/1000-4x5-women-startpage-wk37.mp4" controls autoPlay={true} loop></video>
          <div className='flex justify-between mx-11 mb-7 md:my-11 md:mt-3'>
            <p className='text-2xl md:text-4xl uppercase font-semibold'>New Arrivals</p>
            <p className='text-sm font-semibold uppercase '>buy now</p>
          </div>
        </div>
        <div className='h-1/2 w-full p-10 md:p-0'>
          <Link href="/">
            <Image src={headerKana} alt="alt" />
          </Link>
          <div className='flex justify-between mx-11 my-5'>
            <p className='text-sm md:text-4xl uppercase font-semibold'>New season preppy</p>
            <p className='text-sm font-semibold uppercase '>buy now</p>
          </div>
      </div>
        </div>
    </>
  )
}

export default HeroHeader