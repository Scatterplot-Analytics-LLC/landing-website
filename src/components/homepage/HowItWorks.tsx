'use client'

import React, { useMemo, useRef, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import DecorativeLines from './DecorativeLines'
import type { AnimationItem } from 'lottie-web'
import Image from 'next/image'

// Dynamically import to avoid SSR issues
// const DotLottie = dynamic(
//   () =>
//     import('@lottiefiles/dotlottie-react').then((mod) => mod.DotLottieReact),
//   { ssr: false },
// )

const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { ssr: false },
)

const HowItWorks: React.FC = () => {
  // Memoize the source array so it doesn't recreate on every render
  const source = useMemo(
    () => [
      'https://cdn.lottielab.com/l/4EMkiEBjpc7p1x.json', // 7 secs, 700 frames
      'https://cdn.lottielab.com/l/67vwtNh8dXVPXz.json', // 5.3 secs, 530 frames
      'https://cdn.lottielab.com/l/AZK2unZ2zP24mw.json', // 11.5 secs, 1150 frames
    ],
    [],
  )

  const animationRef1 = useRef<AnimationItem | null>(null)
  const animationRef2 = useRef<AnimationItem | null>(null)
  const animationRef3 = useRef<AnimationItem | null>(null)

  const [complete1Step, setComplete1Step] = useState(false)
  const [complete2Step, setComplete2Step] = useState(false)
  const [complete3Step, setComplete3Step] = useState(false)
  const [activeStep, setActiveStep] = useState<1 | 2 | 3 | 0>(0)
  const [activeProgressPct, setActiveProgressPct] = useState<number>(0)

  // Drive progress by elapsed time (seconds), quantized to 5%
  const durationsByStep = useMemo((): Record<1 | 2 | 3, number> => {
    return { 1: 7.0, 2: 5.3, 3: 11.5 }
  }, [])
  const rafRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)

  // Section visibility observer (40% threshold)
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const hasStartedRef = useRef(false)

  const onComplete1Step = () => {
    // console.log('Animation 1 step completed')
    setComplete2Step(true)
  }

  const onComplete2Step = () => {
    // console.log('Animation 2 step completed')
    setComplete3Step(true)
  }

  const onComplete3Step = () => {
    // console.log('Animation 3 step completed')
    setComplete1Step(true)
  }

  // Start sequence on first viewport entry (>= 40%)
  useEffect(() => {
    if (!sectionRef.current || hasStartedRef.current) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
          hasStartedRef.current = true
          setActiveStep(1)
          setComplete1Step(true)
        }
      },
      { threshold: [0, 0.4, 1] },
    )
    io.observe(sectionRef.current)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (complete1Step) {
      // console.log(animationRef1.current)
      setActiveStep(1)
      setActiveProgressPct(0)
      animationRef1.current?.play()
      setComplete1Step(false)
    }
  }, [complete1Step])

  useEffect(() => {
    if (complete2Step) {
      // console.log(animationRef2.current)
      setActiveStep(2)
      setActiveProgressPct(0)
      animationRef2.current?.play()
      setComplete2Step(false)
    }
  }, [complete2Step])

  useEffect(() => {
    if (complete3Step) {
      // console.log(animationRef3.current)
      setActiveStep(3)
      setActiveProgressPct(0)
      animationRef3.current?.play()
      setComplete3Step(false)
    }
  }, [complete3Step])

  // requestAnimationFrame loop to update progress based on time for the active step
  useEffect(() => {
    if (activeStep === 0) return

    // cancel any previous raf
    if (rafRef.current) {
      window.cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }

    startTimeRef.current = null
    const durationSec = durationsByStep[activeStep]

    const tick = (ts: number) => {
      if (startTimeRef.current === null) startTimeRef.current = ts
      const elapsedMs = ts - startTimeRef.current
      const elapsedSec = elapsedMs / 1000
      const rawPct = Math.min(
        100,
        Math.max(0, (elapsedSec / durationSec) * 100),
      )
      setActiveProgressPct(rawPct)
      if (rawPct < 100) {
        rafRef.current = window.requestAnimationFrame(tick)
      }
    }

    rafRef.current = window.requestAnimationFrame(tick)

    return () => {
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }
  }, [activeStep, durationsByStep])

  const overlayStyle = useMemo(() => {
    const v = Math.max(0, Math.min(100, activeProgressPct))
    return { height: `${v}%` }
  }, [activeProgressPct])

  // Log animation durations once the players are available
  // useEffect(() => {
  //   let attempts = 0
  //   const maxAttempts = 20
  //   const intervalMs = 200

  //   const tryLogDurations = () => {
  //     attempts += 1
  //     const refs = [animationRef1, animationRef2, animationRef3]

  //     refs.forEach((ref, idx) => {
  //       const player: any = ref.current as any
  //       if (!player) return

  //       // Support both Player wrapper (getLottie) and direct AnimationItem
  //       const anim =
  //         typeof player.getLottie === 'function' ? player.getLottie() : player
  //       if (!anim) return

  //       console.log(`----anim ${idx + 1} ----`, anim, anim.totalFrames);

  //       let durationSec: number | undefined
  //       if (typeof anim.getDuration === 'function') {
  //         console.log('getDuration');
  //         durationSec = anim.getDuration(false)
  //         console.log('durationSec', durationSec);
  //       } else if (
  //         typeof anim.totalFrames === 'number' &&
  //         typeof anim.frameRate === 'number' &&
  //         anim.frameRate > 0
  //       ) {
  //         console.log('totalFrames');
  //         durationSec = anim.totalFrames / anim.frameRate
  //       }

  //       if (typeof durationSec === 'number' && isFinite(durationSec)) {
  //         // Log once per animation when available
  //         console.log(`Animation ${idx + 1} duration (s):`, durationSec)
  //       }
  //     })

  //     if (attempts >= maxAttempts) {
  //       clearInterval(timer)
  //     }
  //   }

  //   const timer = setInterval(tryLogDurations, intervalMs)
  //   return () => clearInterval(timer)
  // }, [])

  return (
    <section ref={sectionRef} className='w-full bg-white'>
      <div className='flex w-full flex-col items-center justify-start gap-4 px-4 py-24 md:px-16 lg:px-16'>
        {/* Badge row */}
        <div className='inline-flex items-center justify-center gap-3'>
          <DecorativeLines />
          <div className='text-center text-xl leading-5 tracking-tight text-palette-290'>
            How it works
          </div>
          <DecorativeLines />
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

      {/* Main content grid: steps (left) and visual frame (right) */}
      <div className='mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-4 pb-24 md:grid-cols-2 md:px-16 lg:px-16'>
        {/* Left column: Step list */}
        <div className='flex flex-col items-stretch justify-start gap-7'>
          <div
            className={
              'relative flex flex-col gap-3 border-l-4 border-palette-140 pl-7 ' +
              (activeStep === 1 ? 'py-8' : '')
            }
          >
            {activeStep === 1 && (
              <div
                className='pointer-events-none absolute -left-1 top-0 z-10 w-1 bg-palette-390'
                style={overlayStyle}
              />
            )}
            <div
              className={
                'text-lg font-medium leading-tight xl:text-2xl ' +
                (activeStep === 1
                  ? 'text-palette-290'
                  : 'py-8 text-palette-140')
              }
            >
              Choose Your Template
            </div>
            <div
              className={
                'text-md leading-6 xl:text-lg xl:leading-8 ' +
                (activeStep === 1
                  ? 'text-palette-290'
                  : 'hidden text-palette-140')
              }
            >
              Choose from a library of expertly crafted slides, fully branded
              with your logo. Each slide is designed to make investment concepts
              easy to explain.
            </div>
          </div>

          <div
            className={
              'relative flex flex-col gap-3 border-l-4 border-palette-140 pl-7 ' +
              (activeStep === 2 ? 'py-8' : '')
            }
          >
            {activeStep === 2 && (
              <div
                className='pointer-events-none absolute -left-1 top-0 z-10 w-1 bg-palette-390'
                style={overlayStyle}
              />
            )}
            <div
              className={
                'text-lg font-medium leading-tight xl:text-2xl ' +
                (activeStep === 2
                  ? 'text-palette-290'
                  : 'py-8 text-palette-140')
              }
            >
              Preview & Add to Deck
            </div>
            <div
              className={
                'text-md leading-6 xl:text-lg xl:leading-8 ' +
                (activeStep === 2
                  ? 'text-palette-290'
                  : 'hidden text-palette-140')
              }
            >
              Build and maintain up to 5 investment decks that update
              automatically and are ready whenever you are.
            </div>
          </div>

          <div
            className={
              'relative flex flex-col gap-3 border-l-4 border-palette-140 pl-7 ' +
              (activeStep === 3 ? 'py-8' : '')
            }
          >
            {activeStep === 3 && (
              <div
                className='pointer-events-none absolute -left-1 top-0 z-10 w-1 bg-palette-390'
                style={overlayStyle}
              />
            )}
            <div
              className={
                'text-lg font-medium leading-tight xl:text-2xl ' +
                (activeStep === 3
                  ? 'text-palette-290'
                  : 'py-8 text-palette-140')
              }
            >
              Present with Confidence
            </div>
            <div
              className={
                'text-md leading-6 xl:leading-8 ' +
                (activeStep === 3
                  ? 'text-palette-290'
                  : 'hidden text-palette-140')
              }
            >
              Download your deck as a PDF or present it directly from the
              website.
            </div>
          </div>
        </div>

        {/* Right column: Visual frame with sequential animations over an image */}
        <div className='relative flex h-full items-center justify-center overflow-hidden rounded-xl md:min-h-64 xl:min-h-112'>
          {/* Background illustration */}
          <div className='absolute inset-0 flex items-center justify-center'>
            <Image
              src={'/landing/allslides.svg'}
              alt={'Workspace preview'}
              width={1200}
              height={800}
              className='h-auto w-full max-w-3xl'
              priority={false}
            />
          </div>

          {/* Animation players - only active one is visible */}
          <div className={activeStep === 1 ? 'block' : 'hidden'}>
            <Player
              src={source[0]}
              controls={false}
              lottieRef={(instance) => {
                animationRef1.current = instance
              }}
              onEvent={(event) => {
                if (event === 'complete') {
                  onComplete1Step()
                }
              }}
            />
          </div>

          <div className={activeStep === 2 ? 'block' : 'hidden'}>
            <Player
              src={source[1]}
              controls={false}
              lottieRef={(instance) => {
                animationRef2.current = instance
              }}
              onEvent={(event) => {
                if (event === 'complete') {
                  onComplete2Step()
                }
              }}
            />
          </div>

          <div className={activeStep === 3 ? 'block' : 'hidden'}>
            <Player
              src={source[2]}
              controls={false}
              lottieRef={(instance) => {
                animationRef3.current = instance
              }}
              onEvent={(event) => {
                if (event === 'complete') {
                  onComplete3Step()
                }
              }}
            />
          </div>
        </div>
      </div>

      {/* aria-live to announce step changes */}
      <div className='sr-only' aria-live='polite'>
        {activeStep === 1 && 'Step 1: Choose Your Template'}
        {activeStep === 2 && 'Step 2: Preview and Add to Deck'}
        {activeStep === 3 && 'Step 3: Present with Confidence'}
      </div>
    </section>
  )
}

export default HowItWorks
