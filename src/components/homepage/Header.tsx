'use client'

import AnimatedButton from '@/src/components/homepage/AnimatedButton'
import { Button } from '@/src/components/ui/button'
import { CircleUser } from 'lucide-react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='sticky top-0 z-50 w-full bg-palette-350 px-5 py-3'>
      <div className='mx-auto flex max-w-7xl items-center justify-between'>
        {/* Navigation Links */}
        <nav className='flex items-center space-x-8'>
          <a
            href='#features'
            className='group relative text-sm font-medium text-palette-10 transition-colors hover:text-palette-360'
          >
            Features
            <span className='absolute bottom-0 left-0 h-0.5 w-0 bg-palette-10 transition-all duration-300 group-hover:w-full group-hover:bg-palette-360' />
          </a>
          <a
            href='#solutions'
            className='group relative text-sm font-medium text-palette-10 transition-colors hover:text-palette-360'
          >
            Solutions
            <span className='absolute bottom-0 left-0 h-0.5 w-0 bg-palette-10 transition-all duration-300 group-hover:w-full group-hover:bg-palette-360' />
          </a>
          <a
            href='#faq'
            className='group relative text-sm font-medium text-palette-10 transition-colors hover:text-palette-360'
          >
            FAQ
            <span className='absolute bottom-0 left-0 h-0.5 w-0 bg-palette-10 transition-all duration-300 group-hover:w-full group-hover:bg-palette-360' />
          </a>
        </nav>

        {/* Logo */}
        <div className='flex-1 text-center'>
          <Image
            src='/logo-wordmark.png'
            alt='Scatterplot'
            width={200}
            height={48}
            className='mx-auto h-8 w-auto sm:h-10 md:h-12'
            style={{ aspectRatio: '200/48' }}
          />
        </div>

        {/* Action Buttons */}
        <div className='flex items-center space-x-4'>
          <AnimatedButton size='sm'>Try Now</AnimatedButton>

          <Button
            variant='outline'
            size='sm'
            className='border-palette-30 bg-palette-80 px-6 py-4 text-palette-200 hover:bg-palette-90 hover:text-palette-210'
          >
            <CircleUser className='h-4 w-4' />
            <span className='text-sm font-medium'>Login</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
