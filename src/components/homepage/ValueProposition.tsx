import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import DecorativeLines from './DecorativeLines'

const ValueProposition: React.FC = () => {
  // Words Animation in ValueProposition
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Get only span elements whose id matches "<text>-<number>"
    const wordSpans = Array.from(
      document.querySelectorAll('.value-proposition-container span[id]'),
    ).filter((el) => /.+-\d+$/.test((el as HTMLElement).id)) as HTMLElement[]

    // Create a single ScrollTrigger for the word highlighting animation
    ScrollTrigger.create({
      id: 'words-animation',
      trigger: '.value-proposition-container',
      start: 'bottom bottom',
      end: '+=800%',
      scrub: 20,
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
    'Advisors spend hours finding data, building charts, and polishing decks. Scatterplot delivers daily updated, client-ready visuals, helping you communicate market insights clearly and confidently.'
  const words = text.split(' ')

  return (
    <div className='value-proposition-container relative flex h-screen flex-col items-center justify-center bg-white px-4 md:px-16 lg:px-32 xl:px-56'>
      {/* Value Proposition Heading */}
      <div className='mb-7 flex items-center justify-center gap-3'>
        <DecorativeLines />
        <div className='text-center text-xl font-normal leading-5 tracking-tight text-gray-700'>
          Value proposition
        </div>
        <DecorativeLines />
      </div>

      {/* Main Value Proposition Text */}
      <div className='w-full max-w-4xl text-center'>
        <span className='text-3xl font-medium leading-tight text-gray-500/40 md:text-4xl lg:text-5xl'>
          {words.map((word, index) => (
            <span
              key={`${word}-${index}`}
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
