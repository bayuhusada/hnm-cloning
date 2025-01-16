import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { Bag, CaretDown, Globe, Heart, MagnifyingGlass, Minus, User } from '@phosphor-icons/react/dist/ssr'

import logo from '@/assets/logo.svg'
const HeaderBar = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex m-5 gap-10 '>
      <Image src={logo} alt="logo" width={50} height={50} />
      <button>
        <div className=''>
        <Minus />
        <Minus />
        </div>
      </button>
      <Link href="/" className='uppercase font-semibold '>ladies</Link>
      <Link href="/" className='uppercase text-gray-500 font-semibold '>MEN</Link>
      <Link href="/" className='uppercase text-gray-500 font-semibold '>BABY</Link>
      <Link href="/" className='uppercase text-gray-500 font-semibold '>KIDS</Link>
      <Link href="/" className='uppercase text-gray-500 font-semibold '>SPORT</Link>
      </div>

      <div className='flex gap-5 items-center m-5'>
        <MagnifyingGlass size={20} />
        <User size={20} />
        <Heart size={20} />
        <Bag size={20} />
        <span className='flex items-center gap-2'>
          <Globe size={20} />
          EN
          <CaretDown size={20} />
        </span>
      </div>
    </div>
  )
}

export default HeaderBar