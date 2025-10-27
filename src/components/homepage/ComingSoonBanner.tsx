'use client'

import React from 'react'
import Image from 'next/image'
import AnimatedButton from '@/src/components/homepage/AnimatedButton'

const ComingSoonBanner: React.FC = () => {
  return (
    <div className='flex h-96 w-full overflow-hidden'>
      {/* Left Panel - Text and CTA */}
      <div className='flex w-2/3 items-center justify-start bg-palette-10 px-14'>
        <div className='flex w-3/4 flex-col items-start gap-8'>
          {/* Text Content */}
          <div className='flex w-full flex-col items-start gap-2'>
            <h2 className='w-full text-left text-5xl font-medium leading-tight text-palette-80'>
              Coming Soon!
            </h2>
            <p className='w-full text-left text-xl font-normal leading-tight text-palette-80'>
              Learn how to turn complex finance data into client-friendly
              stories. Blogs launching shortly.
            </p>
          </div>

          {/* CTA Button */}
          <AnimatedButton
            variant='outline'
            size='lg'
            className='w-48 rounded-lg border border-palette-80 bg-transparent text-palette-80 hover:bg-palette-80 hover:text-palette-10'
          >
            Explore Now
          </AnimatedButton>
        </div>
      </div>

      {/* Right Panel - Image */}
      <div className='flex h-96 flex-1 items-center justify-center overflow-hidden bg-white'>
        <div className='relative h-full w-full'>
          <Image
            src='/image.png'
            alt='Two professionals discussing with laptop in modern office setting'
            fill
            className='object-cover'
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default ComingSoonBanner
