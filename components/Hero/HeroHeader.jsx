import Image from 'next/image'
import React from 'react'

import header from '../../assets/ladies_header.jpg'
import headerKana from '../../assets/ladies_kanan.jpg'

const HeroHeader = () => {
  return (
    <div>
      <Image src={header} className='w-full' alt='header' />
      <div>
      <video src="../../assets/viedeo.mp4" controls></video>
      <Image src={headerKana} alt="alt"/>
      </div>
    </div>
  )
}

export default HeroHeader