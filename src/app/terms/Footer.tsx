'use client'

import Image from 'next/image'
import { Instagram, Linkedin, X as XIcon } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='flex h-auto flex-col bg-palette-200 p-6 text-white sm:px-10 lg:p-16'>
      <div className='mx-auto flex w-full max-w-6xl flex-col gap-12 pb-16 md:flex-row md:items-start md:justify-between md:gap-16'>
        {/* Left - Company Info */}
        <div className='flex flex-col gap-3'>
          <div className='flex items-center gap-3'>
            <Image
              src='/logo-wordmark-white.png'
              alt='Scatterplot'
              width={150}
              height={32}
              className='h-10 w-auto'
            />
          </div>

          <div className='flex flex-col gap-1 text-sm font-normal leading-5 tracking-tight text-white/60'>
            <p>800 Westchester Avenue</p>
            <p>Rye Brook, NY 10573</p>
            <p className='mt-2'>+1 408 123 4567</p>
          </div>
        </div>

        {/* Right Section Group */}
        <div className='flex flex-col gap-8 md:flex-row md:items-start md:gap-16'>
          {/* Navigation Links */}
          <div className='flex flex-col gap-2 md:min-w-32'>
            <a
              href='/#features'
              className='py-2 text-sm font-medium leading-5 text-white transition-colors hover:text-white/80'
            >
              Features
            </a>
            <a
              href='/#solutions'
              className='py-2 text-sm font-medium leading-5 text-white transition-colors hover:text-white/80'
            >
              Solutions
            </a>
            <a
              href='/#faq'
              className='py-2 text-sm font-medium leading-5 text-white transition-colors hover:text-white/80'
            >
              FAQ
            </a>
          </div>

          {/* Pricing CTA */}
          <div className='flex w-full max-w-xs flex-col gap-3 md:w-64'>
            <h3 className='text-xl font-normal text-white'>Just $25 a Week</h3>
            <p className='text-xs font-light leading-5 text-white/60'>
              With 50+ dynamic charts, customizable decks, your branding — you
              can cancel anytime.
            </p>
            <button
              type='button'
              onClick={() => {
                const base = process.env.NEXT_PUBLIC_REDIRECT_URL || ''
                window.location.href = `${base}/auth/signup`
              }}
              className='mt-3 flex h-12 items-center justify-center rounded-lg bg-palette-360 px-6 py-4 text-base font-medium text-white transition-colors hover:bg-palette-370'
            >
              Start 7-Day Free Trial
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className='border-t border-white/20 py-6'>
        <div className='mx-auto flex w-full max-w-6xl flex-col gap-6 text-white/60 md:flex-row md:items-center md:justify-between md:gap-0'>
          {/* Left - Copyright */}
          <p className='text-wrap text-xs font-normal'>
            © 2025 Scatterplot Analytics LLC. All rights reserved.
          </p>

          {/* Center - Social Icons */}
          <div className='flex items-center gap-6 text-white'>
            <a
              href='/#features'
              className='h-4 w-4 transition-colors hover:text-white/80'
              aria-label='Instagram'
            >
              <Instagram className='h-4 w-4' />
            </a>
            <a
              href='/#features'
              className='h-4 w-4 transition-colors hover:text-white/80'
              aria-label='LinkedIn'
            >
              <Linkedin className='h-4 w-4' />
            </a>
            <a
              href='/#features'
              className='h-4 w-4 transition-colors hover:text-white/80'
              aria-label='X'
            >
              <XIcon className='h-4 w-4' />
            </a>
          </div>

          {/* Right - Legal Links */}
          <div className='flex items-center gap-6 text-xs font-normal'>
            <a
              href='/privacy'
              className='transition-colors hover:text-white/80'
            >
              Privacy Policy
            </a>
            <a href='/terms' className='transition-colors hover:text-white/80'>
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
