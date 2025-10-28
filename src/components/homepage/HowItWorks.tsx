import React from 'react'
import DecorativeLines from './DecorativeLines'

// Header-only section inspired by refer.txt and design image.
// We intentionally avoid inline styles and hardcoded colors per design system rules.
// Bottom animation/illustration is omitted for now as requested.

const HowItWorks: React.FC = () => {
  return (
    <section className='w-full bg-white'>
      <div className='flex w-full flex-col items-center justify-start gap-4 px-4 py-24 md:px-16 lg:px-16'>
        {/* Badge row */}
        <div className='inline-flex items-center justify-center gap-3'>
          <DecorativeLines color='#374151' />
          <div className='text-center text-xl leading-5 tracking-tight text-palette-290'>
            How it works
          </div>
          <DecorativeLines color='#374151' />
        </div>

        {/* Title and subtitle */}
        <div className='flex flex-col items-center justify-start gap-3'>
          <div className='w-full max-w-4xl text-center text-4xl leading-tight text-palette-290 md:text-5xl lg:text-6xl'>
            Simplify Prep,
            <br className='hidden sm:block' />
            Maximize Client Impact
          </div>
          <div className='w-full max-w-3xl text-center text-xl leading-8 text-palette-290 md:text-2xl'>
            From picking a template to presenting your insights—just 3 simple
            steps to create polished, data-rich decks that win client
            confidence.
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
