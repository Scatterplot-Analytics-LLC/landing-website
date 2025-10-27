import React from 'react'
import AnimatedButton from './AnimatedButton'
import Image from 'next/image'
import BentoChart1 from './BentoChart1'

interface BentoComponentProps {
  color?: string
}

const BentoComponent: React.FC<BentoComponentProps> = ({
  color = '#781242',
}) => {
  return (
    <div className='mx-auto w-full max-w-7xl'>
      {/* Main Grid Container */}
      <div
        className='grid gap-8'
        style={{
          gridTemplateColumns: 'repeat(15, minmax(0, 1fr))',
          gridTemplateRows: '350px 350px',
        }}
      >
        {/* Section 1: Top-Left - Guided Talking Points */}
        <div className='col-span-6 flex flex-col rounded-xl bg-palette-370 pl-10 pr-10 pt-10'>
          <h3 className='text-3xl font-medium leading-9 text-gray-800'>
            Guided Talking Points for Client Discussions
          </h3>
          {/* Line Chart Area */}
          <div className='flex flex-1 items-end overflow-hidden'>
            {/* <Image
              src='/landing/bento11.svg'
              alt='Bento Component'
              width={0}
              height={0}
              className='h-auto w-full max-w-sm'
            /> */}
            <div className='w-full max-w-sm'>
              <BentoChart1 color={color} />
            </div>
          </div>
        </div>

        {/* Section 2: Top-Right - Data-Centric Designs */}
        <div className='col-span-9 flex flex-col rounded-xl bg-palette-370 pl-10 pr-10 pt-10'>
          <h3 className='text-3xl font-medium leading-9 text-gray-800'>
            Data-Centric Designs
          </h3>
          <p className='mb-2 text-xl font-normal leading-7 text-gray-800'>
            Unlock slides that make client conversations clearer and impacter.
          </p>

          {/* Main Metrics Card */}
          <div className='flex flex-1 items-end overflow-hidden'>
            <Image
              src='/landing/bento12.svg'
              alt='Bento Component'
              width={0}
              height={0}
              className='h-auto w-112 max-w-none'
            />
          </div>

          {/* Small Bar Chart */}
          {/* <Image
            src='/landing/bento13.svg'
            alt='Bento Component'
            width={0}
            height={0}
            className='h-auto w-auto max-w-none'
          /> */}
        </div>

        {/* Section 3: Bottom-Left - Always On-Brand */}
        <div className='col-span-9 overflow-hidden rounded-xl bg-palette-370'>
          <div className='flex flex-col gap-3 p-10'>
            <h3 className='text-3xl font-medium leading-9 text-gray-800'>
              Always On-Brand
            </h3>
            <p className='w-80 text-xl font-normal leading-7 text-gray-800'>
              Consistency across decks with modern, credible design and your
              logo.
            </p>
          </div>

          {/* Deck Preview Card */}
          <div className='flex flex-col gap-4 rounded-xl bg-stone-50 p-5'>
            {/* Header */}
            <div className='flex items-center justify-between rounded border border-gray-200 bg-white px-3 py-2'>
              <div className='flex items-center gap-3.5'>
                <span className='text-base font-semibold text-gray-800'>
                  Investment Deck
                </span>
                <span className='text-xs font-normal text-gray-500'>
                  5 slides
                </span>
              </div>
              <div className='relative h-5 w-5'>
                <div className='h-3.5 w-4 border border-gray-800'></div>
              </div>
            </div>

            {/* Slide Previews */}
            <div className='flex gap-2'>
              {/* Left Slide - Bar Chart */}
              <div className='flex flex-1 flex-col gap-4 rounded border border-zinc-300 bg-white p-4'>
                <div className='flex items-center gap-1'>
                  <div className='h-2 w-11 rounded bg-stone-300'></div>
                  <div className='h-2 w-24 rounded bg-neutral-400'></div>
                </div>

                <div className='flex gap-1'>
                  <div className='flex flex-col items-start justify-start gap-4'>
                    <div className='text-xs font-medium text-zinc-700'>
                      $1000
                    </div>
                    <div className='text-xs font-medium text-zinc-700'>
                      $500
                    </div>
                    <div className='text-xs font-medium text-zinc-700'>
                      $200
                    </div>
                    <div className='text-xs font-medium text-zinc-700'>$0</div>
                  </div>
                  <div className='flex items-end gap-1'>
                    <div className='h-12 w-4 rounded bg-pink-900'></div>
                    <div className='h-14 w-4 rounded bg-pink-900'></div>
                    <div className='h-11 w-4 rounded bg-pink-900'></div>
                    <div className='h-8 w-4 rounded bg-pink-900'></div>
                    <div className='h-5 w-4 rounded bg-pink-900'></div>
                    <div className='h-16 w-4 rounded bg-pink-900'></div>
                    <div className='h-14 w-4 rounded bg-pink-900'></div>
                  </div>
                </div>

                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-0.5'>
                    <div className='h-2 w-2 border border-gray-700'></div>
                    <span className='text-xs font-extrabold text-gray-800'>
                      Your logo
                    </span>
                  </div>
                  <div className='h-2 w-14 rounded bg-zinc-500'></div>
                </div>
              </div>

              {/* Right Slide - Line Chart */}
              <div className='flex flex-1 flex-col gap-3.5 rounded border border-zinc-300 bg-white p-3.5'>
                <div className='flex items-center gap-1'>
                  <div className='h-2 w-11 rounded bg-stone-300'></div>
                  <div className='h-2 w-24 rounded bg-neutral-400'></div>
                </div>

                <div className='flex h-32 items-center'>
                  <div className='flex gap-0.5'>
                    <div className='flex flex-col items-start justify-start gap-4'>
                      <div className='text-xs font-medium text-zinc-700'>
                        $1000
                      </div>
                      <div className='text-xs font-medium text-zinc-700'>
                        $500
                      </div>
                      <div className='text-xs font-medium text-zinc-700'>
                        $200
                      </div>
                      <div className='text-xs font-medium text-zinc-700'>
                        $100
                      </div>
                    </div>
                    <div className='relative h-20 w-52'>
                      {/* Grid Lines */}
                      <div className='absolute inset-0 flex flex-col justify-between'>
                        <div className='h-px w-full bg-zinc-100'></div>
                        <div className='h-px w-full bg-zinc-100'></div>
                        <div className='h-px w-full bg-zinc-100'></div>
                        <div className='h-px w-full bg-zinc-100'></div>
                      </div>

                      {/* Line Chart */}
                      <div className='absolute inset-0 bg-gradient-to-b from-pink-100 to-white'></div>
                      <div className='absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 transform bg-pink-900'></div>
                      <div className='absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-pink-900 bg-white'></div>
                    </div>
                  </div>
                </div>

                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-0.5'>
                    <div className='h-2 w-2 border border-slate-500'></div>
                    <span className='text-xs font-extrabold text-slate-500'>
                      Your logo
                    </span>
                  </div>
                  <div className='h-1.5 w-11 rounded bg-zinc-500'></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Bottom-Right - CTA Section */}
        <div className='col-span-6 flex flex-col items-center justify-between rounded-xl bg-palette-200 px-14 py-10'>
          <h2 className='text-center text-3xl font-normal leading-10 text-white'>
            See How
            <br />
            Scatterplot Works.
            <br />
            Build your first
            <br />
            client-ready deck
            <br />
            in minutes.
          </h2>

          <AnimatedButton
            variant='outline'
            size='lg'
            className='bg-white text-palette-200 hover:bg-gray-50'
          >
            Try at $25/week
          </AnimatedButton>
        </div>
      </div>
    </div>
  )
}

export default BentoComponent
