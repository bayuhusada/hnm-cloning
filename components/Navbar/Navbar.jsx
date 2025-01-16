'use client'

import Link from 'next/link';
import React, { useState } from 'react'
import HeaderBar from './HeaderBar';
import { Minus, Plus } from '@phosphor-icons/react/dist/ssr';

const Navbar = ( ) => {
  const [open, setOpen] = useState(false)

  return (
  <>
  <div className='bg-red-600 flex gap-10 p-3 items-center justify-center'>
    <h1 className='text-white uppercase text-sm'>happy lunar new year</h1>
    <button 
    className=' focus:outline-none flex items-center gap-3'
    onClick={() => setOpen(!open)}
    >
      {open ? <h1 className='text-white uppercase text-sm'>close</h1> : <h1 className='text-white uppercase text-sm'>buy now</h1>}
      <div className='space-y-1'>
        {open ? <Minus className='text-white' size={30} /> : <Plus className='text-white' size={28} />}
      </div>
    </button>

    <div
    className={`${
      open ? 'block' : 'hidden'
      } flex flex-col space-x-6 absolute top-[50px] w-[400px] bg-white border border-gray-950 py-6 font-semibold`}
    >
          <Link href="/" className="block py-2 px-9 hover:text-gray-500 hover:bg-transparent">
            LADIES
          </Link>
          <Link href="/about" className="block py-2 px-4 hover:text-gray-500 hover:bg-transparent">
            MEN
          </Link>
          <Link href="/services" className="block py-2 px-4 hover:text-gray-500 hover:bg-transparent">
            KIDS
          </Link>
          <Link href="/contact" className="block py-2 px-4 hover:text-gray-500 hover:bg-transparent">
            BABY
          </Link>
          <Link href="/contact" className="block py-2 px-4 hover:text-gray-500 hover:bg-transparent">
            DOWNLOAD OUR APP - IOS
          </Link>
          <Link href="/contact" className="block py-2 px-4 hover:text-gray-500 hover:bg-transparent mb-10">
            DOWNLOAD OUR APP - ANDROID
          </Link>
    </div>
  </div>
  <HeaderBar />
  </>
  )
}

export default Navbar