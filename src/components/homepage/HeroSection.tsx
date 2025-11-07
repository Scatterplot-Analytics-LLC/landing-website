'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import Script from 'next/script'
import AnimatedButton from '@/src/components/homepage/AnimatedButton'
import { Button } from '@/src/components/ui/button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Calendly type declaration
interface Calendly {
  initPopupWidget: (options: { url: string }) => void
}

declare global {
  interface Window {
    Calendly?: Calendly
  }
}

const HeroSection: React.FC = () => {
  // Add Calendly CSS to document head
  useEffect(() => {
    const link = document.createElement('link')
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link)
      }
    }
  }, [])

  const handleBookDemo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/spati-scatterplot/30min',
      })
    }
  }

  // Slides Animation in HeroSection
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('.allslides', {
      scrollTrigger: {
        id: 'slides-animation',
        trigger: '.measurement-div-1',
        start: 'bottom bottom',
        end: '+=400%',
        scrub: 3,
        pin: '.background-pinned-hero-section',
        // markers: true,
      },
      x: '-60%',
      duration: 5,
      ease: 'none',
    })
  })
  return (
    <div className='background-pinned-hero-section relative flex flex-col items-center overflow-hidden bg-palette-350'>
      {/* Calendly Script */}
      <Script
        src='https://assets.calendly.com/assets/external/widget.js'
        strategy='lazyOnload'
      />
      {/* Background Vector */}
      <div className='pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 transform'>
        <Image
          src='/landing/vector.svg'
          alt='Background Vector'
          width={0}
          height={0}
          className='h-auto w-auto max-w-none'
          style={{ transform: 'translateY(0%)' }}
          priority
        />
      </div>

      {/* Background Ellipse */}
      <div className='pointer-events-none absolute bottom-0 left-0'>
        <Image
          src='/landing/background-ellipse.svg'
          alt='Background Ellipse'
          width={0}
          height={0}
          className='to h-full w-full max-w-none object-cover'
          style={{ transform: 'translateX(-20%) translateY(0%)' }}
          priority
        />
      </div>

      {/* Hero Content */}
      <div className='relative z-10 mb-16 flex w-full flex-col items-center justify-start gap-10 px-4 pt-32'>
        <div className='flex flex-col items-center justify-start gap-4'>
          <div className='flex flex-col items-center justify-start gap-3'>
            <h1 className='m-0 max-w-4xl justify-start text-center text-6xl font-normal leading-tight text-palette-10'>
              Your dynamic library of visual investment insights.
            </h1>
            <div className='max-w-lg justify-start text-center text-lg font-normal leading-relaxed text-palette-10'>
              Access expertly designed, daily-updated market and economy charts
              and presentations tailored to your brand.
            </div>
          </div>
        </div>
        <div className='inline-flex items-start justify-start gap-6'>
          <AnimatedButton
            size='default'
            onClick={() => {
              const base = process.env.NEXT_PUBLIC_REDIRECT_URL || ''
              window.location.href = `${base}/auth/signup`
            }}
          >
            Try Now
          </AnimatedButton>
          <Button
            variant='outline'
            className='border-palette-30 bg-palette-80 px-6 py-4 text-palette-200 hover:bg-palette-90 hover:text-palette-210'
            onClick={handleBookDemo}
          >
            <span className='text-sm font-medium'>Book Demo</span>
          </Button>
        </div>
      </div>
      <div className='measurement-div-1 relative z-10 flex w-full flex-col items-center justify-start overflow-hidden'>
        <Image
          src='/screen-overlay.png'
          alt='Screen Overlay'
          width={0}
          height={0}
          className='h-auto w-full object-contain'
          priority
        />
        {/* Allslides overlay */}
        <div
          className='absolute overflow-hidden'
          style={{
            // Position relative to the screen area of ScreenOverlay
            top: '42%', // Adjust this to align with the screen area
            bottom: '5%', // Adjust this to align with the screen area
            left: '10%', // Adjust this to align with the screen area
            right: '10%', // Adjust this to align with the screen area
            height: 'auto',
            zIndex: 20,
          }}
        >
          <Image
            src='/landing/allslides.svg'
            alt='All Slides Carousel'
            width={0}
            height={0}
            className='allslides h-auto w-full object-contain'
            style={{
              minWidth: '200vw', // Ensure the image is wide enough for horizontal scrolling
            }}
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
