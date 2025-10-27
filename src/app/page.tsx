'use client'

import Header from '@/src/components/homepage/Header'
import HeroSection from '@/src/components/homepage/HeroSection'
import ValueProposition from '@/src/components/homepage/ValueProposition'
import ExtraComponent from '@/src/components/homepage/ExtraComponent'
import ComingSoonBanner from '@/src/components/homepage/ComingSoonBanner'
import Footer from '@/src/components/homepage/Footer'

const HomePage = () => {
  return (
    <div className='min-h-screen bg-neutral-100'>
      <Header />
      <HeroSection />
      <ValueProposition />
      <ComingSoonBanner />
      <ExtraComponent />

      <Footer />
    </div>
  )
}

export default HomePage
