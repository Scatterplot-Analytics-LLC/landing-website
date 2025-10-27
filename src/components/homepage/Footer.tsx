'use client'

import { Instagram, Linkedin, X as XIcon } from 'lucide-react'
import Image from 'next/image'
// import { useState } from 'react'

const Footer = () => {
  //   const [formData, setFormData] = useState({
  //     name: '',
  //     email: '',
  //     message: '',
  //   })

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault()
  //     // Handle form submission here
  //     console.log('Form submitted:', formData)
  //   }

  return (
    <div className='relative bg-white'>
      {/* Contact Form Section */}
      {/* <div className='relative overflow-hidden rounded-3xl bg-[#DD0473] px-16 py-20'>
   
        <div className='absolute left-[186px] top-[-775px] h-[944px] w-[944px] rounded-full bg-[#FF0285] blur-[307px]' />
        <div className='absolute left-[94px] top-[-210px] h-[1190px] w-[1128px] outline outline-[0.61px] outline-offset-[-0.3px] outline-[#FF5FB2]' />
        <div className='absolute -left-[150px] top-[412px] h-[643px] w-[1616px] rounded-full bg-[#490524] blur-[320px]' />

        <div className='relative z-10 flex items-start justify-between'>
      
          <div className='flex w-[697px] flex-col gap-3'>
            <h2 className='text-[56px] font-medium leading-[73px] text-white'>
              Can't find a visual you want?
            </h2>
            <p className='text-lg font-normal leading-[27px] text-[#F9F9F9]'>
              Share suggestions or topics you'd love to see— by filling the form
              or emailing at{' '}
              <a
                href='mailto:support@scatterplot.co'
                className='font-medium text-white underline'
              >
                support@scatterplot.co
              </a>
            </p>
          </div>

          <div className='flex w-[405px] flex-col gap-6'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
             
              <div className='flex gap-6'>
                <div className='flex flex-1 flex-col gap-2'>
                  <label className='text-sm font-medium leading-[14px] text-white'>
                    Name
                  </label>
                  <input
                    type='text'
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder='Enter your name'
                    className='w-full rounded-lg bg-[#AA0558] p-3 text-sm font-light leading-5 text-white/60 placeholder:text-white/60'
                  />
                </div>
                <div className='flex flex-1 flex-col gap-2'>
                  <label className='text-sm font-medium leading-[14px] text-white'>
                    Email
                  </label>
                  <input
                    type='email'
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder='Enter your email'
                    className='w-full rounded-lg bg-[#AA0558] p-3 text-sm font-light leading-5 text-white/60 placeholder:text-white/60'
                  />
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <label className='text-sm font-medium leading-[14px] text-white'>
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder='Describe the visual you are looking for ...'
                  rows={4}
                  className='w-full resize-none rounded-lg bg-[#AA0558] p-3 text-sm font-light leading-5 text-white/60 placeholder:text-white/60'
                />
              </div>

              <button
                type='submit'
                className='flex h-[52px] items-center justify-center gap-2 rounded-lg bg-[#E00074] px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-[#DD0473]'
              >
                <span>Send a message</span>
                <ArrowRight className='h-[17px] w-[17px]' />
              </button>
            </form>
          </div>
        </div>
      </div> */}

      {/* Footer Section */}
      <div className='flex h-auto flex-col bg-palette-200 px-16 pt-60'>
        {/* Main footer content */}
        <div className='flex items-start justify-between pb-16'>
          {/* Left - Company Info */}
          <div className='flex flex-col gap-3'>
            {/* Logo */}
            <div className='flex items-center gap-3'>
              <Image
                src='/logo-wordmark-white.png'
                alt='Scatterplot'
                width={150}
                height={32}
                className='h-10 w-auto'
              />
            </div>

            {/* Address and contact info */}
            <div className='flex flex-col gap-1 text-sm font-normal leading-5 tracking-tight text-white/60'>
              <p>800 Westchester Avenue</p>
              <p>Rye Brook, NY 10573</p>
              <p className='mt-2'>+1 408 123 4567</p>
            </div>
          </div>

          {/* Right Section Group - Middle and Right */}
          <div className='flex flex-row items-start gap-8 lg:gap-16'>
            {/* Middle - Navigation Links */}
            <div className='flex flex-col gap-2'>
              <a
                href='#features'
                className='py-2 text-sm font-medium leading-5 text-white hover:text-white/80'
              >
                Features
              </a>
              <a
                href='#solutions'
                className='py-2 text-sm font-medium leading-5 text-white hover:text-white/80'
              >
                Solutions
              </a>
              <a
                href='#faq'
                className='py-2 text-sm font-medium leading-5 text-white hover:text-white/80'
              >
                FAQ
              </a>
            </div>

            {/* Right - Pricing CTA */}
            <div className='flex w-64 flex-col gap-3'>
              <h3 className='text-xl font-normal text-white'>
                Just $25 a Week
              </h3>
              <p className='text-xs font-light leading-5 text-white/60'>
                With 50+ dynamic charts, customizable decks, your branding — you
                can cancel anytime.
              </p>
              <button className='mt-3 flex h-12 items-center justify-center rounded-lg bg-palette-360 px-6 py-4 text-base font-medium text-white transition-colors hover:bg-palette-370'>
                Start 7-Day Free Trial
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='flex items-center justify-between border-t border-white/20 py-6'>
          {/* Left - Copyright */}
          <p className='text-wrap text-xs font-normal text-white/60'>
            © 2025 Scatterplot Analytics LLC. All rights reserved.
          </p>

          {/* Center - Social Icons */}
          <div className='flex items-center gap-6'>
            <a
              href='#feature'
              className='h-4 w-4 text-white hover:text-white/80'
              aria-label='Instagram'
            >
              <Instagram className='h-4 w-4' />
            </a>
            <a
              href='#feature'
              className='h-4 w-4 text-white hover:text-white/80'
              aria-label='LinkedIn'
            >
              <Linkedin className='h-4 w-4' />
            </a>
            <a
              href='#feature'
              className='h-4 w-4 text-white hover:text-white/80'
              aria-label='X'
            >
              <XIcon className='h-4 w-4' />
            </a>
          </div>

          {/* Right - Legal Links */}
          <div className='flex items-center gap-6'>
            <a
              href='#feature'
              className='text-xs font-normal text-white/60 hover:text-white/80'
            >
              Privacy Policy
            </a>
            <a
              href='#feature'
              className='text-xs font-normal text-white/60 hover:text-white/80'
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
