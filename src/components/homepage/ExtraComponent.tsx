import React from 'react'

const ValueProposition: React.FC = () => {
  return (
    <div className='value-proposition-container relative flex h-screen flex-col items-center justify-center bg-white px-4 md:px-16 lg:px-32 xl:px-56'>
      {/* Value Proposition Heading */}
      <div className='mb-7 flex items-center justify-center gap-3'>
        <svg
          width='14'
          height='17'
          viewBox='0 0 14 17'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M13.0634 1.04887L1.28377 8.6849'
            stroke='#374151'
            strokeWidth='2.5'
          />
          <path
            d='M12.4594 7.39164L0.679762 15.0277'
            stroke='#374151'
            strokeWidth='2.5'
          />
        </svg>
        <div className='text-center text-xl font-normal leading-5 tracking-tight text-gray-700'>
          Value proposition
        </div>
        <svg
          width='14'
          height='17'
          viewBox='0 0 14 17'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M13.0634 1.04887L1.28377 8.6849'
            stroke='#374151'
            strokeWidth='2.5'
          />
          <path
            d='M12.4594 7.39164L0.679762 15.0277'
            stroke='#374151'
            strokeWidth='2.5'
          />
        </svg>
      </div>

      {/* Main Value Proposition Text */}
      <div className='w-full max-w-4xl text-center'>
        <span className='text-3xl font-medium leading-tight text-gray-500/40 md:text-4xl lg:text-5xl'>
          Scatterplot saves advisors hours by delivering updated, professional,
          brand-ready slides instantly which will turn tedious deck creation
          into confident, client-focused conversations.
        </span>
      </div>
    </div>
  )
}

export default ValueProposition
