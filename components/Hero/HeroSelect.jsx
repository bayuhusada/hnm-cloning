import { collect } from '@/assets/asset'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSelect = () => {
  return (
    <div className='relative top-[800px] mt-20 items-center  flex flex-col'>
      <div className='text-right'>
        <h1 className='text-sm font-semibold uppercase'>Select Collections</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-1/2 '>
        {collect.map((item) => (
          <Link href={'/'} className='mb-10' >
            <Image src={item.img} alt="alt" className='items-center' />
            <p className='uppercase font-semibold text-sm mt-3'>{item.name}</p>
            <p className='uppercase text-sm'>Explore</p>
          </Link>
        ))}
      </div>
      <p className='mx-11 my-20 text-sm'>Explore the latest women’s fashion collection at H&M Indonesia, offering trendy yet affordable styles. From casual wear to formal outfits, each piece is designed to make you feel confident every day. Discover the latest trends that suit the active and dynamic lifestyle of Indonesian women. Shop now and enjoy exclusive deals only at <b>H&M!</b></p>
    </div>
  )
}

export default HeroSelect