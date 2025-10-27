import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ValueProposition: React.FC = () => {
  // Words Animation in ValueProposition
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Get all word spans
    const wordSpans = document.querySelectorAll(
      '[id*="-"]',
    ) as NodeListOf<HTMLElement>

    // Create a single ScrollTrigger for the word highlighting animation
    ScrollTrigger.create({
      id: 'words-animation',
      trigger: '.value-proposition-container',
      start: 'bottom bottom',
      end: '+=600%',
      scrub: 5,
      pin: '.value-proposition-container',
      // markers: true,
      onUpdate: (self) => {
        // Calculate which word should be highlighted based on scroll progress
        const { progress } = self
        const currentWordIndex = Math.floor(progress * wordSpans.length)

        // Reset all words to gray
        wordSpans.forEach((wordSpan) => {
          wordSpan.style.color = 'rgba(107, 114, 128, 0.4)'
        })

        // Highlight current word
        if (wordSpans[currentWordIndex]) {
          wordSpans[currentWordIndex].style.color = '#be185d'
        }
      },
    })
  })

  // Split the text into words for highlighting (including "Scatterplot")
  const text =
    'Scatterplot saves advisors hours by delivering updated, professional, brand-ready slides instantly which will turn tedious deck creation into confident, client-focused conversations.'
  const words = text.split(' ')

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
          {words.map((word, index) => (
            <span
              key={word}
              id={`${word}-${index}`}
              className={index === 0 ? 'text-pink-800' : 'text-gray-500/40'}
            >
              {`${word} `}
            </span>
          ))}
        </span>
      </div>
    </div>
  )
}

export default ValueProposition
