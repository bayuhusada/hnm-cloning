import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { Bag, CaretDown, Equals, Globe, Heart, MagnifyingGlass, Minus, User, X } from '@phosphor-icons/react/dist/ssr'

import logo from '@/assets/logo.svg'
const HeaderBar = () => {

  const [open, setOpen] = useState(false)

  return (
  <>
    <div className='flex items-center justify-between'>
      <div className='flex m-5 gap-10 '>
      <Image src={logo} alt="logo" width={50} height={50} />
      <button
      onClick={() => setOpen(!open)}
      >
        <div className=''>
        <Equals size={30} weight='thin' />
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
{open && 
<div>
    <div className='fixed top-0 left-0 h-full bg-white text-white p-5 transform transition-transform duration-300 ease-in-out z-10'>
      <div className="flex text-black items-center justify-center gap-8 m-3">
      <button
      onClick={() => setOpen(!open)}>
          <X weight='bold'size={20} className='text-black' />
        </button>
      <Link href="/" className='uppercase font-semibold '>ladies</Link>
      <Link href="/" className='uppercase text-gray-500 font-semibold '>MEN</Link>
      <Link href="/" className='uppercase text-gray-500 font-semibold '>BABY</Link>
      <Link href="/" className='uppercase text-gray-500 font-semibold '>KIDS</Link>
      <Link href="/" className='uppercase text-gray-500 font-semibold '>SPORT</Link>
      </div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </div>
</div>
  }

  </>
    
  )
}

export default HeaderBar