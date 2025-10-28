import React from 'react'
import AnimatedButton from './AnimatedButton'
import BentoChart1 from './BentoChart1'
import BentoChart2 from './BentoChart2'
import BentoChart3 from './BentoChart3'
import BentoChart4 from './BentoChart4'

interface BentoComponentProps {
  color?: string
}

// works till lg viewport, need to turn to slider for smaller viewports
const BentoComponent: React.FC<BentoComponentProps> = ({
  color = '#781242',
}) => {
  console.log('color', color)

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
          <div className='relative flex flex-1 items-end overflow-hidden'>
            <div className='w-full max-w-lg'>
              <BentoChart2 color={color} />
            </div>

            {/* Small Bar Chart - Overlapping BentoChart2 */}
            <div className='absolute bottom-10 right-0 hidden lg:block xl:bottom-14'>
              <BentoChart3 color={color} />
            </div>
          </div>
        </div>

        {/* Section 3: Bottom-Left - Always On-Brand */}
        <div className='relative col-span-11 overflow-hidden rounded-xl bg-palette-370'>
          <div className='relative z-10 flex flex-col gap-3 p-10'>
            <h3 className='text-3xl font-medium leading-9 text-gray-800'>
              Always On Brand
            </h3>
            <p className='text-xl font-normal leading-7 text-gray-800'>
              Consistency across decks with modern, credible design and your
              logo.
            </p>
          </div>

          {/* Deck Preview Card */}
          <div className='absolute bottom-0 right-0 w-96 lg:w-112'>
            <BentoChart4 color={color} />
          </div>
        </div>

        {/* Section 4: Bottom-Right - CTA Section */}
        <div
          className='col-span-4 flex flex-col items-center justify-between rounded-xl px-8 py-6'
          style={{ backgroundColor: color }}
        >
          <h2 className='text-lg font-normal leading-5 text-white lg:text-2xl lg:leading-8 xl:text-3xl xl:leading-10'>
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
            className='bg-white hover:bg-palette-90'
            textColor={color}
          >
            Try at $25/week
          </AnimatedButton>
        </div>
      </div>
    </div>
  )
}

export default BentoComponent
