'use client'

import { useEffect } from 'react'

// Preload the Lottie player component to eliminate loading delays
const LottiePreloader = () => {
  useEffect(() => {
    // Preload Lottie player globally
    import('@lottiefiles/react-lottie-player')
  }, [])

  return null // This component doesn't render anything
}

export default LottiePreloader
