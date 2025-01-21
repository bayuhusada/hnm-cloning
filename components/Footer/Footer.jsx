'use client'

import { Minus, Plus } from '@phosphor-icons/react/dist/ssr'
import React, { useState } from 'react'

const Footer = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
    <div className='relative top-[800px]'>
      <div className='m-11 flex gap-3'>
        <button className='bg-white border border-gray-950 p-1 w-fit hover:bg-black hover:text-white uppercase text-sm'>print</button>
        <button className='bg-white border border-gray-950 p-1 w-fit hover:bg-black hover:text-white uppercase text-sm'>pastel colours</button>
        <button className='bg-white border border-gray-950 p-1 w-fit hover:bg-black hover:text-white uppercase text-sm'>floral</button>
        <button className='bg-white border border-gray-950 p-1 w-fit hover:bg-black hover:text-white uppercase text-sm'>embroidered</button>
        <button className='bg-white border border-gray-950 p-1 w-fit hover:bg-black hover:text-white uppercase text-sm'>utility</button>
        <button className='bg-white border border-gray-950 p-1 w-fit hover:bg-black hover:text-white uppercase text-sm'>sequin</button>
        <button className='bg-white border border-gray-950 p-1 w-fit hover:bg-black hover:text-white uppercase text-sm'>lace</button>
        <button className='bg-white border border-gray-950 p-1 w-fit hover:bg-black hover:text-white uppercase text-sm'>graphic</button>
        <button className='bg-white border border-gray-950 p-1 w-fit hover:bg-black hover:text-white uppercase text-sm'>y2k</button>
        <button className='bg-white border border-gray-950 p-1 w-fit hover:bg-black hover:text-white uppercase text-sm'>utility</button>
        {
          open && <div className='flex gap-3'>
            <button className='bg-white border border-gray-950 p-1 w-fit hover:bg-black hover:text-white uppercase text-sm'>glitter</button>
            <button className='bg-white border border-gray-950 p-1 w-fit hover:bg-black hover:text-white uppercase text-sm'>bows</button>
            <button className='bg-white border border-gray-950 p-1 w-fit hover:bg-black hover:text-white uppercase text-sm'>animal part</button>
            <button className='bg-white border border-gray-950 p-1 w-fit hover:bg-black hover:text-white uppercase text-sm'>pleated</button>
            <button className='bg-white border border-gray-950 p-1 w-fit hover:bg-black hover:text-white uppercase text-sm'>shiny</button>
            <button className='bg-white border border-gray-950 p-1 w-fit hover:bg-black hover:text-white uppercase text-sm'>bohemian</button>
            <button className='bg-white border border-gray-950 p-1 w-fit hover:bg-black hover:text-white uppercase text-sm'>ombre</button>
            <button className='bg-white border border-gray-950 p-1 w-fit hover:bg-black hover:text-white uppercase text-sm'>reversible sequins</button>
            <button className='bg-white border border-gray-950 p-1 w-fit hover:bg-black hover:text-white uppercase text-sm'>grunge</button>
            <button className='bg-white border border-gray-950 p-1 w-fit hover:bg-black hover:text-white uppercase text-sm'>crocheted</button>

          </div>
        }
        {
        
        open ? <button onClick={() => setOpen(!open)} className='flex items-center gap-2'> <span className='uppercase font-semibold text-sm'>show less</span> <Minus size={20} weight='bold' /> </button> : <button onClick={() => setOpen(!open)} className='flex items-center gap-2'> <span className='uppercase font-semibold text-sm'>show more</span> <Plus size={20} weight='bold' /> </button> 
          
        }
      </div>

    <div className='mx-11 my-20 '>
      <p>HM.COM/LADIES</p>
    </div>

    </div>

    
    </>
  )
}

export default Footer