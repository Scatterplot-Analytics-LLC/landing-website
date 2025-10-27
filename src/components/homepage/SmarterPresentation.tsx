'use client'

import React from 'react'
import DecorativeLines from './DecorativeLines'
import BentoComponent from './BentoComponent'

const SmarterPresentations: React.FC = () => {
  return (
    <div className='flex w-full flex-col items-center justify-start gap-20 bg-white px-4 py-24 md:px-16 lg:px-16'>
      {/* Header Section */}
      <div className='flex flex-col items-center justify-start gap-4'>
        {/* Solutions Badge */}
        <div className='inline-flex items-center justify-center gap-3'>
          <DecorativeLines color='#374151' />
          <div className='text-center text-xl leading-5 tracking-tight text-gray-700'>
            Solutions
          </div>
          <DecorativeLines color='#374151' />
        </div>

        {/* Main Title and Subtitle */}
        <div className='flex flex-col items-center justify-start gap-3'>
          <div className='w-full max-w-4xl text-center text-4xl leading-tight text-gray-700 md:text-5xl lg:text-6xl'>
            Smarter Presentations
          </div>
          <div className='w-full max-w-3xl text-center text-xl leading-8 text-gray-700 md:text-2xl'>
            You get customized slides with your logo, colors, and disclosures
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <BentoComponent />
    </div>
  )
}

export default SmarterPresentations
