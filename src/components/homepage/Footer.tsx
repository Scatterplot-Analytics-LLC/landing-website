'use client'

import {
  Instagram,
  Linkedin,
  X as XIcon,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react'
import Image from 'next/image'
import { useForm, ValidationError } from '@formspree/react'
import { useState } from 'react'

// Declare Calendly type for TypeScript
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

const Footer = () => {
  const [state, handleSubmit] = useForm('xjkpoawy') // https://formspree.io/f/xjkpoawy
  const [clientErrors, setClientErrors] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleCalendlyClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/spati-scatterplot/30min',
      })
    }
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const message = String(data.get('message') || '').trim()

    const nextErrors = {
      name: name ? '' : 'Name is required',
      email: email ? '' : 'Email is required',
      message: message ? '' : 'Message is required',
    }
    setClientErrors(nextErrors)

    if (!name || !email || !message) return

    // hand over to Formspree
    await handleSubmit(e)
  }

  return (
    <div className='relative bg-white'>
      {/* Contact Form Section */}
      <div className='absolute -top-40 left-1/2 z-20 hidden w-10/12 -translate-x-1/2 overflow-hidden rounded-3xl bg-palette-420 px-10 py-12 lg:block'>
        {/* Background overlays (kept within contact form via overflow-hidden) */}
        {/* <Image
          src='/footer-gradient.png'
          alt='gradient background'
          fill
          priority
          className='pointer-events-none absolute inset-0 z-0 select-none border-2 border-green-500 object-cover'
          aria-hidden
        /> */}
        <Image
          src='/footer-vector.png'
          alt='vector background'
          fill
          className='pointer-events-none absolute z-0 select-none object-cover object-top'
          aria-hidden
        />

        <div className='relative z-10 flex items-start justify-between'>
          <div className='flex w-697 flex-col gap-3'>
            <h2 className='text-56 font-medium leading-73 text-white md:text-4xl lg:text-6xl'>
              Curious how Scatterplot can help you?
            </h2>
            <p className='text-lg font-normal leading-27 text-palette-395'>
              Contact us with any questions or feedback - we&apos;d love to hear
              from you. You can also book a call with us here:{' '}
              <button
                type='button'
                onClick={handleCalendlyClick}
                className='inline-flex items-center font-medium text-white underline'
              >
                Book a Demo <ArrowUpRight className='w-17 h-17' />
              </button>
            </p>
          </div>

          <div className='flex w-405 flex-col gap-6'>
            {state.succeeded ? (
              <div className='flex flex-col gap-3 rounded-lg bg-palette-400 p-4 text-white'>
                <p className='text-sm leading-5'>
                  Thanks! Your message has been sent.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className='flex flex-col gap-6'>
                <div className='flex gap-6'>
                  <div className='flex flex-1 flex-col gap-2'>
                    <label
                      htmlFor='name'
                      className='text-sm font-medium leading-14 text-white'
                    >
                      Name
                    </label>
                    <input
                      id='name'
                      type='text'
                      name='name'
                      required
                      aria-invalid={!!clientErrors.name}
                      placeholder='Enter your name'
                      className='w-full rounded-lg bg-palette-400 p-3 text-sm font-light leading-5 text-white/60 placeholder:text-white/60'
                    />
                    {clientErrors.name ? (
                      <p className='text-xs font-medium text-white'>
                        {clientErrors.name}
                      </p>
                    ) : null}
                  </div>
                  <div className='flex flex-1 flex-col gap-2'>
                    <label
                      htmlFor='email'
                      className='text-sm font-medium leading-14 text-white'
                    >
                      Email
                    </label>
                    <input
                      id='email'
                      type='email'
                      name='email'
                      required
                      aria-invalid={!!clientErrors.email}
                      placeholder='Enter your email'
                      className='w-full rounded-lg bg-palette-400 p-3 text-sm font-light leading-5 text-white/60 placeholder:text-white/60'
                    />
                    {clientErrors.email ? (
                      <p className='text-xs font-medium text-white'>
                        {clientErrors.email}
                      </p>
                    ) : null}
                    <ValidationError
                      prefix='Email'
                      field='email'
                      errors={state.errors}
                    />
                  </div>
                </div>

                <div className='flex flex-col gap-2'>
                  <label
                    htmlFor='message'
                    className='text-sm font-medium leading-14 text-white'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    required
                    aria-invalid={!!clientErrors.message}
                    placeholder='Describe the visual you are looking for ...'
                    rows={4}
                    className='w-full resize-none rounded-lg bg-palette-400 p-3 text-sm font-light leading-5 text-white/60 placeholder:text-white/60'
                  />
                  {clientErrors.message ? (
                    <p className='text-xs font-medium text-white'>
                      {clientErrors.message}
                    </p>
                  ) : null}
                  <ValidationError
                    prefix='Message'
                    field='message'
                    errors={state.errors}
                  />
                </div>

                <button
                  type='submit'
                  disabled={state.submitting}
                  className='flex h-52 items-center justify-center gap-2 rounded-lg bg-palette-360 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-palette-420 disabled:opacity-70'
                >
                  <span>
                    {state.submitting ? 'Sending...' : 'Send a message'}
                  </span>
                  <ArrowRight className='w-17 h-17' />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className='relative block overflow-hidden bg-palette-420 px-10 py-12 lg:hidden'>
        {/* Background overlays (kept within contact form via overflow-hidden) */}
        {/* <Image
          src='/footer-gradient.png'
          alt='gradient background'
          fill
          priority
          className='pointer-events-none absolute inset-0 z-0 select-none border-2 border-green-500 object-cover'
          aria-hidden
        /> */}
        <Image
          src='/footer-vector.png'
          alt='vector background'
          fill
          className='pointer-events-none absolute inset-0 z-0 select-none object-cover object-top'
          aria-hidden
        />

        <div className='relative z-10 flex items-start justify-between gap-6'>
          <div className='flex w-1/2 flex-col gap-3'>
            <h2 className='text-4xl font-medium text-white md:text-56 md:leading-73 lg:text-7xl'>
              Curious how Scatterplot can help you?
            </h2>
            <p className='text-lg font-normal leading-27 text-palette-395'>
              Contact us with any questions or feedback - we&apos;d love to hear
              from you. You can also book a call with us here:
              <button
                type='button'
                onClick={handleCalendlyClick}
                className='inline-flex items-center font-medium text-white underline'
              >
                Book a Demo <ArrowUpRight className='w-17 h-17' />
              </button>
            </p>
          </div>

          <div className='flex w-1/2 flex-col gap-6'>
            {state.succeeded ? (
              <div className='flex flex-col gap-3 rounded-lg bg-palette-400 p-4 text-white'>
                <p className='text-sm leading-5'>
                  Thanks! Your message has been sent.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className='flex flex-col gap-6'>
                <div className='flex gap-6'>
                  <div className='flex flex-1 flex-col gap-2'>
                    <label
                      htmlFor='name'
                      className='text-sm font-medium leading-14 text-white'
                    >
                      Name
                    </label>
                    <input
                      id='name'
                      type='text'
                      name='name'
                      required
                      aria-invalid={!!clientErrors.name}
                      placeholder='Enter your name'
                      className='w-full rounded-lg bg-palette-400 p-3 text-sm font-light leading-5 text-white/60 placeholder:text-white/60'
                    />
                    {clientErrors.name ? (
                      <p className='text-xs font-medium text-white'>
                        {clientErrors.name}
                      </p>
                    ) : null}
                  </div>
                  <div className='flex flex-1 flex-col gap-2'>
                    <label
                      htmlFor='email'
                      className='text-sm font-medium leading-14 text-white'
                    >
                      Email
                    </label>
                    <input
                      id='email'
                      type='email'
                      name='email'
                      required
                      aria-invalid={!!clientErrors.email}
                      placeholder='Enter your email'
                      className='w-full rounded-lg bg-palette-400 p-3 text-sm font-light leading-5 text-white/60 placeholder:text-white/60'
                    />
                    {clientErrors.email ? (
                      <p className='text-xs font-medium text-white'>
                        {clientErrors.email}
                      </p>
                    ) : null}
                    <ValidationError
                      prefix='Email'
                      field='email'
                      errors={state.errors}
                    />
                  </div>
                </div>

                <div className='flex flex-col gap-2'>
                  <label
                    htmlFor='message'
                    className='text-sm font-medium leading-14 text-white'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    required
                    aria-invalid={!!clientErrors.message}
                    rows={4}
                    placeholder='Describe the visual you are looking for ...'
                    className='w-full resize-none rounded-lg bg-palette-400 p-3 text-sm font-light leading-5 text-white/60 placeholder:text-white/60'
                  />
                  {clientErrors.message ? (
                    <p className='text-xs font-medium text-white'>
                      {clientErrors.message}
                    </p>
                  ) : null}
                  <ValidationError
                    prefix='Message'
                    field='message'
                    errors={state.errors}
                  />
                </div>

                <button
                  type='submit'
                  disabled={state.submitting}
                  className='flex h-52 items-center justify-center gap-2 rounded-lg bg-palette-360 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-palette-420 disabled:opacity-70'
                >
                  <span>
                    {state.submitting ? 'Sending...' : 'Send a message'}
                  </span>
                  <ArrowRight className='w-17 h-17' />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

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
              <p className='mt-2'>+1 (914) 354 3363</p>
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
              <button
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
