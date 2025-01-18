import Image from 'next/image'
import React from 'react'

import header from '../../assets/ladies_header.jpg'
import headerKana from '../../assets/ladies_kanan.jpg'
import Link from 'next/link'

const HeroHeader = () => {
  return (
    <div>
      <div className=''>
        <Image src={header} className='w-full absolute' alt='header' />
        <div className='flex justify-between m-5'>
        <p className='relative top-[750px] ml-10 text-white text-5xl uppercase font-semibold'>happy lunar new year</p>
        <p className='relative top-[750px] ml-10 text-black bg-white p-3  uppercase font-semibold'>buy now</p>
        </div>
      </div>
      <div className='flex flex-row w-full relative top-[800px]'>
        <div className='h-full w-1/2'>
          <video src="https://acc-media-assets.s3.ap-southeast-1.amazonaws.com/hm_id/vmd/24/NS/12/1000-4x5-women-startpage-wk37.mp4" controls autoPlay={true} loop></video>
          <div className='flex justify-between mx-11 my-5'>
            <p className='text-4xl uppercase font-semibold'>New Arrivals</p>
            <p className='text-base font-semibold uppercase '>buy now</p>
          </div>
        </div>
        <div className='h-1/2 w-1/2'>
          <Link href="/">
            <Image src={headerKana} alt="alt" />
          </Link>
          <div className='flex justify-between mx-11 my-5'>
            <p className='text-4xl uppercase font-semibold'>New season preppy</p>
            <p className='text-base font-semibold uppercase '>buy now</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HeroHeader