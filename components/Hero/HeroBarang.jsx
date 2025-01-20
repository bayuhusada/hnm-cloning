import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { baju } from '../../assets/asset'


const HeroBarang = () => {



  return (
    <div className=' relative top-[800px]'>
      <div className='flex justify-between m-11'>
        <h1 className='text-sm uppercase'>New Arrivals</h1>
        <Link href="/"><p className='text-sm font-semibold uppercase'>buy now</p></Link>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
      {baju.map((item) => (
        <div key={item.id}>
          <Link href={"/"}>
          <Image src={item.img} alt="alt" className='w-full h-full' />
          </Link>
        </div>
      ))}
      </div>
    </div>
  )
}

export default HeroBarang